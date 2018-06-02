from django.shortcuts import render, HttpResponse
from .models import * 
from django.core import serializers
# Create your views here.

def home(request):
    return render(request, 'app/index.html')

def create_note(request):
    Note.obj.create_note(request.POST)
    notes =  Note.obj.notes_rev()
    return render(request, 'app/notes.html', {'notes':notes})
