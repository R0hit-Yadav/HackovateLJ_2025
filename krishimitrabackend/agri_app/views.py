import os
import torch
import torch.nn as nn
import torchvision.transforms as transforms
from PIL import Image

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings


# ---------------------------
# LOGIN VIEW (unchanged)
# ---------------------------
@api_view(['POST'])
def login_user(request):
    name = request.data.get("name")
    phone = request.data.get("phone")

    if not name or not phone:
        return Response({"message": "Name and phone number are required"}, status=400)

    user = users_collection.find_one({"phone": phone})

    if user:
        return Response({"message": "Login successful", "user": {"name": user["name"], "phone": user["phone"]}})
    else:
        users_collection.insert_one({"name": name, "phone": phone})
        return Response({"message": "User registered and logged in", "user": {"name": name, "phone": phone}})


# ---------------------------
# DEFINE SAME MODEL AS TRAINING
# ---------------------------
class PlantCNN(nn.Module):
    def __init__(self, num_classes):
        super(PlantCNN, self).__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, padding=1), 
            nn.ReLU(),
            nn.Conv2d(32, 32, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2,2),

            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.Conv2d(64, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2,2),

            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.Conv2d(128, 128, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2,2),

            nn.AdaptiveAvgPool2d((1,1))
        )
        
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(128, 256),
            nn.ReLU(),
            nn.BatchNorm1d(256),
            nn.Dropout(0.2),

            nn.Linear(256, 128),
            nn.ReLU(),
            nn.BatchNorm1d(128),
            nn.Dropout(0.2),

            nn.Linear(128, 64),
            nn.ReLU(),
            nn.BatchNorm1d(64),
            nn.Dropout(0.2),

            nn.Linear(64, 38)
        )
    
    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        return x


# ---------------------------
# LOAD MODEL
# ---------------------------
MODEL_PATH = os.path.join(settings.BASE_DIR, "agri_app", "models", "plant_10epoch.pth")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# same classes as during training (from ImageFolder)
CLASS_NAMES = [
    "Apple_Apple_scab", "Apple_Black_rot", "Apple_Cedar_apple_rust",
    "Apple__healthy", "Blueberry_healthy", "Cherry(including_sour)_healthy",
    "Cherry_(including_sour)Powdery_mildew", "Corn(maize)_Cercospora_leaf_spot Gray_leaf_spot",
    "Corn_(maize)Common_rust", "Corn_(maize)_Northern_Leaf_Blight",
    "Corn_(maize)healthy", "Grape_Black_rot", "Grape_Esca(Black_Measles)",
    "Grape_Leaf_blight(Isariopsis_Leaf_Spot)", "Grape__healthy",
    "Orange_Haunglongbing(Citrus_greening)", "Peach__Bacterial_spot",
    "Peach_healthy", "Pepper,_bell_Bacterial_spot", "Pepper,_bell_healthy",
    "Potato_Early_blight", "Potato_Late_blight", "Potato_healthy",
    "Raspberry_healthy", "Soybean_healthy", "Squash_Powdery_mildew",
    "Strawberry_Leaf_scorch", "Strawberry_healthy", "Tomato_Bacterial_spot",
    "Tomato_Early_blight", "Tomato_Late_blight", "Tomato_Leaf_Mold",
    "Tomato_Septoria_leaf_spot", "Tomato_Spider_mites Two-spotted_spider_mite",
    "Tomato_Target_Spot", "Tomato_Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato_Tomato_mosaic_virus", "Tomato_healthy"
]
# ⚠️ Replace with your actual 4 classes (check `train_data.classes` when training)

model = PlantCNN(num_classes=len(CLASS_NAMES)).to(device)
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.eval()


# ---------------------------
# IMAGE PREPROCESSING
# ---------------------------
transform = transforms.Compose([
    transforms.Resize((224, 224)),   # you used 224x224
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])  # same as training
])

def preprocess_image(image_path):
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0)  # add batch dimension
    return image.to(device)


# ---------------------------
# PREDICT VIEW
# ---------------------------
@api_view(["POST"])
def predict_disease(request):
    if "file" not in request.FILES:
        return Response({"error": "No file uploaded"}, status=400)

    uploaded_file = request.FILES["file"]
    file_name = default_storage.save("media/" + uploaded_file.name, ContentFile(uploaded_file.read()))
    file_path = os.path.join(settings.MEDIA_ROOT, file_name)

    try:
        image = preprocess_image(file_path)

        with torch.no_grad():
            outputs = model(image)
            _, predicted = torch.max(outputs, 1)
            predicted_class = CLASS_NAMES[predicted.item()]

        return Response({"disease": predicted_class})

    except Exception as e:
        return Response({"error": str(e)}, status=500)
