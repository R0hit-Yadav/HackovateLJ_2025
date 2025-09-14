from django.contrib import admin
from .models import Userlogin

# Register your models here.
class UserloginAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone_no', 'state', 'city', 'crops']
    
admin.site.register(Userlogin, UserloginAdmin)