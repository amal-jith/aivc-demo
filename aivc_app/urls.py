from django.urls import path
from . import views


app_name = "aivc_app"

urlpatterns = [
    path('', views.home, name='home'),
]