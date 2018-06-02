from django.urls import path 
from . import views


urlpatterns=[
    path('', views.home),
    path('create_note', views.create_note),
]