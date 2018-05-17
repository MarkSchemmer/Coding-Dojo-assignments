from django.urls import path, re_path, reverse
from . import views

urlpatterns=[
    path('', views.index, name='home'),
    path('reg', views.reg),
    path('success', views.success, name='success'),
    path('logout', views.logout),
    path('login', views.login),
]