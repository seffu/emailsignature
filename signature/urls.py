from django.urls import path
from . import views

app_name = "signature"

urlpatterns = [
    path('', views.home_view, name="home")
]