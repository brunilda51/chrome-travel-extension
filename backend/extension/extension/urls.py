
from django.urls import include, path
from django.contrib import admin
from .views import search_view, user_view
import os

urlpatterns = [
    
    path('searches/', search_view.search_list, name='search-list'),
    path('searches/latest_destination_codes', search_view.latest_destination_codes),
    path('searches/detail/<int:pk>/', search_view.search_detail, name='search-detail'),

    path('users/', user_view.user_list, name='user-list'),
    path('users/<int:pk>/', user_view.user_detail, name='user-detail'),

]