from django.urls import path, re_path 
from . import views
urlpatterns=[
    path('', views.index, name='home'),
    path('reg', views.reg),
    path('login',views.login),
    path('success', views.success, name='success'),
    path('logout', views.logout),
]