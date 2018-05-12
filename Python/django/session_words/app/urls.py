from django.urls import path, re_path 
from . import views


urlpatterns=[
    path('', views.word),
    path('create_word', views.word),
    path('clear', views.clear),
]