from django.shortcuts import render, redirect
from .models import User




def index(request):
    return render(request, 'users/index.html',{'users':User.objects.all()})

def add(request):
    return render(request, 'users/add.html')


def show(request,id):
    print(id)
    print(request.POST)
    return render(request, 'users/show.html', {'u':User.objects.get(id=id)})

def edit(request,id):
    print(id)
    print(request.POST)
    return render(request, 'users/edit.html', {'u':User.objects.get(id=id)})

def de(request, id):
    user = User.objects.get(id=id)
    user.delete()
    return redirect('/')

def update_user(request):
    r = request.POST 
    user  = User.objects.get(id=r['id'])
    user.first_name = r['first_name']
    user.last_name = r['last_name']
    user.email = r['email']
    user.save()
    return redirect('/')

def create(request):
    obj=request.POST
    user = User()
    user.first_name = obj['first_name']
    user.last_name = obj['last_name']
    user.email = obj['email']
    user.save()
    return redirect('/')

# Create your views here.
