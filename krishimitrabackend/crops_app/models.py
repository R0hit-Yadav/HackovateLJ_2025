from django.db import models

# Create your models here.
class Crops(models.Model):
    crop_name = models.CharField(max_length=127)
    soil_type = models.CharField(max_length=100)
    description = models.TextField()
    weather = models.CharField(max_length=255)
    harvest_period = models.CharField(max_length=64)