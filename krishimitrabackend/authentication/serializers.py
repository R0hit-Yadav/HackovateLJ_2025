from rest_framework import serializers
from .models import Userlogin

class UserloginSerializers(serializers.ModelSerializer):
    class Meta:
        model = Userlogin
        fields = ('name', 'phone_no', 'state', 'city', 'crops')