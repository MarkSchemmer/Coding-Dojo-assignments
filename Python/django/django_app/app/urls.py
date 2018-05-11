from django.urls import path,re_path
from . import views

urlpatterns = [ 
    path('',views.index),
    path('new',views.new),
    path('create',views.create),
    re_path(r'(?P<number>\d+)$', views.number),
    re_path(r'(?P<number>\d+)/edit$',views.edit),
    re_path(r'(?P<number>\d+)/delete$',views.destroy),
]