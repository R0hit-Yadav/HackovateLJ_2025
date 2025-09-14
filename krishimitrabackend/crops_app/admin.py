from django.contrib import admin
from .models import Crops
# Register your models here.
class CropsAdmin(admin.ModelAdmin):
    list_display = ['crop_name', 'soil_type', 'description', 'weather', 'harvest_period']
    
admin.site.register(Crops, CropsAdmin)