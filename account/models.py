from distutils.command.upload import upload
from django.db import models

# Create your models here.


class Product(models.Model):
    image = models.ImageField(upload_to = 'images',blank=False,null=False)
    name = models.CharField(max_length=50,blank=False,null=False)
    desc = models.TextField()
    date = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.name

