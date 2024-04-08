"""extension URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.urls import include, path
from django.contrib import admin
from .views import search_view, user_view
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
import yaml
import os

openapi_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'openapi.yaml')
with open(openapi_path, 'r') as file:
    openapi_spec = file.read()

schema_view = get_schema_view(
    openapi.Info(
        title="Your API Title",
        default_version='v1',
        description="Your API description",
        terms_of_service="https://www.example.com/policies/terms/",
        contact=openapi.Contact(email="contact@example.com"),
        license=openapi.License(name="BSD License"),
    ),

    public=True,
)
urlpatterns = [

    # URLs for Search model
    path('searches/', search_view.search_list, name='search-list'),
    path('searches/<int:pk>/', search_view.search_detail, name='search-detail'),

    # URLs for User model
    path('users/', user_view.user_list, name='user-list'),
    path('users/<int:pk>/', user_view.user_detail, name='user-detail'),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]