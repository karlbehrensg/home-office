from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet


routers = routers.DefaultRouter()
routers.register('users', UserViewSet)

urlpatterns = [
    path('', include(routers.urls)),
]
