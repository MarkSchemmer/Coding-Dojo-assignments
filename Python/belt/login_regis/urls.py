from django.urls import path, re_path, include, reverse
from . import views
app_name='log'
urlpatterns=[
    path('',  views.log_reg, name='home'),
    path('login', views.log),
    path('reg', views.reg),
]