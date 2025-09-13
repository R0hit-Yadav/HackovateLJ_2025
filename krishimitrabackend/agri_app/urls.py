from django.urls import path
from .views import login_user,predict_disease

urlpatterns = [
    path('login/', login_user, name="login_user"),
    path("predict_disease/",predict_disease,name="predict_disease"),
]
