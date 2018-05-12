from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string
from random import randint as rnd 
# Create your views here.
gen_str = lambda :  get_random_string(length=rnd(0,20))

def clear(request):
    if request.method == 'POST':
        del request.session['count']
        del request.session['word']
    return redirect('/')



def gen_word(request):
    if 'count' not in request.session:
        request.session['count'] = 0
    if 'word' not in request.session:
        request.session['word'] = ' '
    if request.method == 'POST':
        print('Hello world ')
        request.session['count'] += 1
        request.session['word'] = gen_str()
        return redirect('/')
    vals = {
        'count':request.session['count'],
        'word': request.session['word']}
    return render(request, 'app/index.html',vals)