from django.shortcuts import render, redirect, reverse, HttpResponse
from .models import * 
from django.core import serializers
# Create your views here.

alph = [chr(97+x) for x in range(26)] + [chr(65+x) for x in range(26)]

def home(request):
    return render(request, 'app/index.html')

def create_user(request):
    User.obj.create_user(request.POST)
    users = User.obj.all()
    usres_json = serializers.serialize('json', users)
    return HttpResponse(usres_json, content_type='application/json')



def find(request):
    print(request.POST['name'])
    if request.POST['name'] not in alph:
        users = []
    else : 
        users = User.obj.filter(first_name__startswith=request.POST['name'])
    return render(request,'app/one_user.html',{'users':users})


def json(request):
    users = User.obj.all()
    json_users = serializers.serialize('json', users)
    return HttpResponse(json_users, content_type='application/json')


def all_users(request):
    users = User.obj.all()
    return render(request, 'app/one_user.html', {'users':users})