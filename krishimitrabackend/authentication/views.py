from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import UserloginSerializers
from .models import Userlogin
# Create your views here.

class UserloginView(viewsets.ModelViewSet):
    serializer_class = UserloginSerializers
    queryset = Userlogin.objects.all()
    lookup_field = "phone_no"
    
    def create(self, request, *args, **kwargs):
        phone_no = request.data.get("phone_no")
        name = request.data.get("name")

        # Check if phone already exists
        existing_user = Userlogin.objects.filter(phone_no=phone_no).first()
        if existing_user:
            if existing_user.name == name:
                return Response(
                    {"message": "Login successful", "user": UserloginSerializers(existing_user).data},
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"message": "Phone number already registered with a different name"},
                    status=status.HTTP_400_BAD_REQUEST
                )

        # Otherwise create a new user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"message": "User created and login successful", "user": serializer.data},
            status=status.HTTP_201_CREATED
        )