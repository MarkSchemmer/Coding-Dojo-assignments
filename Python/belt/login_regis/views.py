from django.shortcuts import redirect, render
from django.urls import reverse
from .models import *


def log_reg(request):
    return render(request, 'login_reg/login_reg.html')

def log(request):
    result = User.obj.login(request.POST)
    if result['errors']:
        request.session['errors'] = result['errors']
        return redirect(reverse('log:home'))
    else:
        request.session['user_id'] = result['user'].id
        request.session['name'] = result['user'].name
        request.session['alias'] = result['user'].alias
        request.session['email'] = result['user'].email
        return redirect(reverse('review:books'))

def reg(request):
    result = User.obj.registration(request.POST)
    if result['errors']:
        request.session['errors'] = result['errors']
        return redirect(reverse('log:home'))
    else:
        request.session['user_id'] = result['user'].id
        request.session['name'] = result['user'].name
        request.session['alias'] = result['user'].alias
        request.session['email'] = result['user'].email
        return redirect(reverse('review:books'))