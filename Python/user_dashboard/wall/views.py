from django.shortcuts import render, redirect
from django.urls import reverse
from login_regis.models import * 
from .models import * 
# Create your views here.

def wall(request):
    user = User.obj.get(id=request.session['user_id'])
    users = User.obj.all()
    return render(request, 'wall/index.html',{
        'user':user,
        'users':users,
        })


def make_message(request):
    Message.obj.make_message(request.POST)
    return redirect(reverse('wall:wall'))

def other_wall(request,id):
    other_user = User.obj.get(id=id)
    cur_user = User.obj.get(id=request.session['user_id'])
    context = {
        'other_user':other_user,
        'cur_user':cur_user
    }
    return render(request, 'wall/other_wall.html', context)
