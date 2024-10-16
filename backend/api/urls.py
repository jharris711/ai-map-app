from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api import views

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register(r'messages', views.MessageViewSet, basename='message')
router.register(r'settings', views.SettingsViewSet, basename='settings')
router.register(r'users', views.UserViewSet, basename='user')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]