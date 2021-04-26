from django.db import models
from PIL import Image
from django.conf import settings
from users.models import CustomUser

class SignatureTool(models.Model):
    full_name = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    website = models.CharField(max_length=50)
    facebook = models.CharField(max_length=50)
    linkedin = models.CharField(max_length=50)
    twitter = models.CharField(max_length=50)
    github = models.CharField(max_length=50)
    instagram = models.CharField(max_length=50)
    whatsapp = models.CharField(max_length=50)
    youtube = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'SignatureTool'
        verbose_name_plural = 'SignatureTool'
    def __str__(self):
        return self.full_name


class UserImage(models.Model):
    owner = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='media_pics/', blank=True, default='default.jpg')