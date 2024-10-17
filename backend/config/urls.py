from django.urls import include, path

urlpatterns = [
    path('', include('api.urls')),
    path('api/auth/', include('authentication.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
