from django.urls import path, re_path, reverse
from . import views
urlpatterns=[
    path('', views.intro, name='intro'),
    path('signin', views.signin, name='signin'),
    path('register', views.register, name='register'),
    path('reg', views.reg),
    path('sig', views.sig),
    path('logout', views.logout, name='logout'),
]