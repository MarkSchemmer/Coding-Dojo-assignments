from django.shortcuts import render, redirect
from django.urls import reverse 
from .models import *
import bcrypt

# Create your views here.

def check_password(ps, user):
    return bcrypt.checkpw(ps.encode(), user.password.encode()) if True else False  


def index(request):
    return render(request, 'app/index.html')

def reg(request):
    if 'errors' in request.session:
        del request.session['errors']
    errors = User.obj.all_errors(request.POST)
    if errors:
       request.session['errors'] = errors
       return redirect(reverse('home'))
    else : 
        if 'errors' in request.session:   
            del request.session['errors']
        request.session['success'] = 'You have successfully logged in'
        request.session['user_email'] = request.POST['email']
        request.session['user_id'] = request.POST['id']
        User.obj.add_user(request.POST)
        return redirect(reverse('success'))


def logout(request):
    request.session.flush()
    return redirect(reverse('home'))

def login(request):
    email, ps = request.POST['email'], request.POST['ps']
    user = User.obj.user_existed(email)
    if len(user) > 0  : 
        request.session['user_id'] = user[0].id
        request.session['success'] = 'You have successfully logged in'
        return redirect(reverse('success'))
    else :
        request.session['login_error'] = 'login error'
        return redirect(reverse('home'))

def success(request):
    id = request.session['user_id']
    user = User.obj.get_user(id)
    return render(request, 'app/success.html', {'user':user})