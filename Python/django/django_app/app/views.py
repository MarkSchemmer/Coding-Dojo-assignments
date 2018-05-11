from django.shortcuts import render,redirect
from django.http import HttpResponse

# Create your views here.

def index(request):
    response = '<p>Index.html helloworld</p>'
    return HttpResponse(response)

def new(request):
    response = '<p>new.html helloworld</p>'
    return HttpResponse(response)

def create(request):
    return redirect('/')


def number(request,number):
    response = '<p>Hello world the number is {}</p>'.format(number)
    return HttpResponse(response)


def edit(request,number):
    response = '<p> Hello world the number {} needs to edited'.format(number)
    return HttpResponse(response)


def destroy(request,number):
    response = '<p> Hello world this number {} needs to be destroyed'.format(number)
    return HttpResponse(response)


