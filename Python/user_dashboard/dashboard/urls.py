from django.urls import path, re_path
from . import views
app_name = 'dashboard'
urlpatterns=[
    path('dashboard', views.dash, name='dash'),
    re_path(r'dashboard/(?P<id>\d+)/edit$', views.edit, name='edit'),
    path('dashboard/info', views.info),
    path('dashboard/desc', views.desc, name='desc'),
    path('dashboard/pass', views.update_pass),
    path('dashboard/add_new', views.dash_admin_add_user, name='add_new_user'),
    path('dashboard/user_added', views.dashboard_user_added), 
    re_path(r'dashboard/delete/(?P<id>\d+)', views.delete),
    re_path(r'dashboard/edit/(?P<id>\d+)', views.admin_edit),
    path('dashboard/admin/info', views.admin_edit_info),
    path('dashboard/admin/pass', views.admin_update_pass),
]