from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Userlogin(models.Model):
    name = models.CharField(max_length=50)
    phone_no = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(
                regex=r'^\d{10}$',   # must be exactly 10 digits
                message="Phone number should be exactly 10 digits",
            )
        ]
    )
    state = models.CharField(max_length=50, default="Unknown")
    city  = models.CharField(max_length=50, default="Unknown")

    crops = models.CharField(max_length=255, blank=True, default="Unknown")

    def get_crops(self):
        return self.crops.split(",") if self.crops else []

    def __str__(self):
        return f"{self.name} - {self.phone_no}"
