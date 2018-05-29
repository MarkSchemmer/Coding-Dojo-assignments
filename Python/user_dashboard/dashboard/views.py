from django.shortcuts import render, redirect
from login_regis.models import * 
from django.urls import reverse
# Create your views here.
def dash(request):
    context = {'users': User.obj.exclude(id=request.session['user_id'])}
    if request.session['is_admin']:
        return render(request, 'dashboard/dash_admin.html', context=context)
    else:
        return render(request, 'dashboard/dash.html', context=context)

def dash_admin_add_user(request):
    return render(request, 'dashboard/admin_add_user.html')


def admin_edit(request, id):
    user = User.obj.filter(id=id)[0]
    context = {
        'user': user,
        'auth': user.user_authenticated,
    }
    return render(request, 'dashboard/admin_edit.html', context=context)

def admin_edit_info(request):
    User.obj.admin_info(request.POST)
    return redirect(reverse('dashboard:dash'))


def admin_update_pass(request):
    User.obj.update_pass(request.POST)
    return redirect(reverse('dashboard:dash'))

def delete(request, id):
    User.obj.delete_user(id)
    return redirect(reverse('dashboard:dash'))

def dashboard_user_added(request):
    result = User.obj.registration(request.POST)
    if result['errors'] :
        return redirect(reverse('dashboard:add_new_user'))
    else:
        return redirect(reverse('dashboard:dash'))


def edit(request, id):
    user = User.obj.filter(id=id)[0]
    context = {
        'user': user,
        'auth': user.user_authenticated,
    }
    return render(request, 'dashboard/edit.html', context=context)

def info(request):
    User.obj.info(request.POST)
    request.session['user'] = request.POST['id']
    return redirect(reverse('dashboard:dash'))

def desc(request):
    User.obj.desc(request.POST)
    request.session['user'] = request.POST['id']
    return redirect(reverse('dashboard:dash'))

def update_pass(request):
    User.obj.update_pass(request.POST)
    request.session['user'] = request.POST['id']
    return redirect(reverse('dashboard:dash'))