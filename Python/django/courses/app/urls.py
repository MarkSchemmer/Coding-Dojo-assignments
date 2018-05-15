from django.urls import path, re_path
from . import views

urlpatterns=[
    path('', views.index, name='home'),
    path('add', views.add),
    re_path(r'desc/(?P<id>\d+)$', views.desc, name='desc'),
    re_path(r'remove/(?P<id>\d+)$', views.delete_user)
]