from django.urls import path, re_path 
from . import views

urlpatterns=[
    path(r'', views.home),
    path(r'input', views.home),
]