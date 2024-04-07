from django.db import models
from django.utils import timezone

class Place(models.Model):
    city_name = models.CharField(max_length=255)
    country_name = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    id = models.AutoField(primary_key=True)
    description = models.TextField()

class User(models.Model):
    email = models.EmailField()
    id = models.AutoField(primary_key=True)
    last_name = models.CharField(max_length=255) 
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=255)

class Search(models.Model):
    id = models.AutoField(primary_key=True) 
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sustainability_score = models.FloatField()
    destination_code = models.CharField(max_length=50)
    origin_code = models.CharField(max_length=50)  
    departure_date = models.DateField(default=timezone.now)
    arrival_date = models.DateField(default=timezone.now)
    timestamp_added = models.DateTimeField(default=timezone.now)
