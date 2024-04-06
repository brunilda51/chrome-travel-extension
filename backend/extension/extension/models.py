from django.db import models

class Place(models.Model):
    city_name = models.CharField(max_length=255)
    country_name = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    id = models.AutoField(primary_key=True)
    description = models.TextField()

class Search(models.Model):
    id = models.AutoField(primary_key=True) 
    sustainability_score = models.FloatField()
    destination_code = models.CharField(max_length=50)  # Assuming destination code length
    origin_code = models.CharField(max_length=50)  # Assuming origin code length
    flight_duration = models.CharField(max_length=255)

class User(models.Model):
    email = models.EmailField()
    googleid = models.CharField(max_length=255)
    id = models.AutoField(primary_key=True)
    last_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
