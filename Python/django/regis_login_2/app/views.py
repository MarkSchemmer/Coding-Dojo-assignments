from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.urls import reverse
import bcrypt
from  .models import * 
# Create your views here.
encrypt_password = lambda ps :  bcrypt.hashpw(ps.encode(), bcrypt.gensalt())
def index(request):
    return render(request, 'app/index.html')

def reg(request):
    result = User.obj.registration(request.POST)
    if result['errors']:
        request.session['errors'] = result['errors']
        return redirect(reverse('home'))
    else:
        request.session['user_id'] = result['new_user'].id
        return redirect(reverse('success'))

def login(request):
    result = User.obj.login(request.POST)
    if result['errors']:
        request.session['errors'] = result['errors']
        return redirect(reverse('home'))
    else:
        request.session['user_id'] = result['user'].id
        request.session['success'] = 'You have successfully logged in'
        return redirect(reverse('success'))

def logout(request):
    request.session.flush()
    return redirect(reverse('home'))

def success(request):
    user = User.obj.filter(id = request.session['user_id'])[0]
    return render(request, 'app/success.html', {'user':user})