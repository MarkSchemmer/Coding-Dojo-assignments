from django.shortcuts import render
import datetime
from time import gmtime, strftime
# Create your views here.

def time_(request):
    t = strftime('%Y-%m-%d %H:%M %p', gmtime())
    return render(request, 'app/index.html',{ 't': t})
