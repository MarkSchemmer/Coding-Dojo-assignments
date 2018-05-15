from django.urls import path, re_path
from .  import views

urlpatterns=[
    path('', views.index),
    path('add', views.add, name='add_user'),
    path('create_user', views.create),
    re_path(r'^show/(?P<id>\d+)$', views.show, name='show'),
    re_path(r'^edit/(?P<id>\d+)$', views.edit, name='edit'),
    path('update_user', views.update_user),
    re_path(r'^delete/(?P<id>\d+)$', views.de)        
]