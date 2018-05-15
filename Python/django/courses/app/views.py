from django.shortcuts import render, redirect
from django.urls import reverse 
from .models import * 
# Create your views here.

def index(request):
    courses = Course.obj.all()
    return render(request, 'app/index.html',{'c':courses})


def add(request):
    print(request.POST)
    Course.obj.save_course(request.POST)
    return redirect(reverse('home'))

def desc(request, id):
    print(id)
    c = Course.obj.get_user(id)
    return render(request, 'app/desc.html', {'c': c})

def delete_user(request,id):
    Course.obj.delete_user(id)
    return redirect(reverse('home'))

