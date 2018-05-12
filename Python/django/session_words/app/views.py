from django.shortcuts import render,redirect
from time import strftime, gmtime
# Create your views here.

keys = ['name','color','size']

make_dict = lambda key, vals: dict(zip(keys,vals))
get_time = lambda : strftime("%Y-%m-%d %H:%M %p", gmtime())


def clear(request):
    del request.session['list']
    return redirect('/')


def word(request):
    if 'list' not in request.session:
        request.session['list'] = []
    if request.method == 'POST':
        vals = list(request.POST.values())[1:]
        request.session['list'].append(make_dict(keys, vals))
        return redirect('/')
    return render(request, 'app/index.html')