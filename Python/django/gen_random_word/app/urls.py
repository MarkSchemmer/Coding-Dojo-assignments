from django.urls import path, re_path
from . import views

urlpatterns=[
    re_path(r'^$', views.gen_word),
    re_path(r'^gen_word$', views.gen_word),
    re_path(r'^clear_session', views.clear),
]