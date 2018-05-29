from django.shortcuts import render, redirect
from django.urls import reverse 
from .models import * 

# Create your views here.

def intro(request):
    return render(request, 'login_regis/intro.html')

def signin(request):
    return render(request, 'login_regis/signin.html')


def logout(request):
    request.session.flush()
    return redirect(reverse('intro'))

def register(request):
    return render(request, 'login_regis/register.html')


def reg(request):
    print(request.POST)
    result = User.obj.registration(request.POST)
    if result['errors'] :
        request.session['errors'] = result['errors']
        return redirect(reverse('register'))
    else:
        request.session['user_id'] = result['user'].id
        request.session['user_auth'] = result['user'].user_authenticated
        request.session['is_admin'] = result['user'].is_admin
        return redirect(reverse('dashboard:dash'))


def sig(request):
    result = User.obj.login(request.POST)
    if result['errors']:
        request.session['errors'] = result['errors']
        return redirect(reverse('signin'))
    else: 
        request.session['user_id'] = result['user'].id
        request.session['user_auth'] = result['user'].user_authenticated
        request.session['is_admin'] = result['user'].is_admin
        return redirect(reverse('dashboard:dash'))