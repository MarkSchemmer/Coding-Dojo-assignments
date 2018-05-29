from django.urls import path, re_path 
from . import views
app_name='wall'
urlpatterns=[
    path('wall', views.wall, name='wall'), 
    path('wall/message', views.make_message),
    re_path(r'wall/(?P<id>\d+)', views.other_wall, name="other"),
]


# (?P<id>\d+)