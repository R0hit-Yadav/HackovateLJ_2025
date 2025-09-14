from django.shortcuts import render
from rest_framework import viewsets

from .models import Crops
from .serializers import CropsSerializer

# Create your views here.

class CropsView(viewsets.ModelViewSet):
    serializer_class = CropsSerializer
    queryset = Crops.objects.all()