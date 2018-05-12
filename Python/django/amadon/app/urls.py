from django.urls import path
from . import views

urlpatterns=[
    path('', views.home),
    path('buy',views.buy),
    path('checkout',views.checkout)
]