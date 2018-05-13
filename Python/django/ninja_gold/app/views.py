from django.shortcuts import render, redirect
from random import randint as rnd 
from time import strftime, gmtime
# Create your views here.


places = [
            {'place':'farm', 'earns':'(earns 10-20 golds)'},
            {'place':'cave', 'earns':'(earns 5-10 golds)'},
            {'place':'house', 'earns':'(earns 2-5 golds)'},
            { 'place':'casino', 'earns':'(earns/takes 0-50 golds)'},
    ]



tme = lambda : strftime('%Y/%M/D' ,gmtime())
positive_earnings = lambda amount, place  : '<p class="pos">Earned {} golds from the {}! {}<p>'.format(amount, place ,tme())
negative_earnings = lambda amount, place : '<p class="neg"> Entered a {} and lost {} golds.. Ouch {}'.format(place, amount, tme())
def casino_chances(am, request):
        if rnd(0,3) == 1:
            request.session['amount'] += am
            return positive_earnings(am,'casino')
        else:
            request.session['amount'] -= am
            return negative_earnings(am, 'casino')
   
def earnings(place,request):
    if place == 'farm':
        am = rnd(10,20)
        request.session['amount'] += am
        return positive_earnings(am, 'farm') 
    elif place == 'cave':
        am = rnd(5,10) 
        request.session['amount'] += am
        return positive_earnings( am, 'cave')
    elif place == 'house':
        am = rnd(2,5)
        request.session['amount'] += am
        return positive_earnings(am, 'house')
    else:
        am = rnd(0,50)
        return casino_chances(am,request)

def home(request):
    # del request.session['mes']
    # del request.session['amount']
    if 'amount' not in request.session:
        request.session['amount'] = 0
    if 'mes' not in request.session:
        request.session['mes'] = []
    di = {'places':places}
    return render(request, 'app/index.html',di)

def process(request):
    request.session['mes'].append(earnings(request.POST['place'], request))
    return redirect('/')