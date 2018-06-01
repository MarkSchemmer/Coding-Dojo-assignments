from django.urls import path, re_path
from . import views
urlpatterns=[
    path('', views.home, name='home'),
    path('create_user', views.create_user),
    path('find_user', views.find),
    path('json_users', views.json),
    path('users_html', views.all_users),
]