from django.db import models

class Airline(models.Model):
    airline_name = models.CharField(max_length=255)
    id = models.AutoField(primary_key=True)
    sustainability_score = models.FloatField()
    description = models.TextField()

class Place(models.Model):
    city_name = models.CharField(max_length=255)
    country_name = models.CharField(max_length=255)
    id = models.AutoField(primary_key=True)
    description = models.TextField()

class Search(models.Model):
    id = models.AutoField(primary_key=True) 
    sustainability_score = models.FloatField()
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE, related_name='searches')
    destination = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='searches_dest')
    flight_duration = models.CharField(max_length=255)
    origin = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='searches_origin')

class User(models.Model):
    email = models.EmailField()
    googleid = models.CharField(max_length=255)
    id = models.AutoField(primary_key=True)
    last_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
