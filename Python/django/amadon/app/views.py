from django.shortcuts import render, redirect
from decimal import Decimal

# logic here!

items=[
    {'name':'Dojo Tshirt','price':19.99},
    {'name':'Dojo Sweater','price':29.99},
    {'name':'Dojo cup', 'price':4.99},
    {'name':'Algorithm Book','price':49.99},
]


# Create your views here.
def home(request):
    if 'item_count' not in request.session:
        request.session['item_count'] = 0 
    if 'amount_spent' not in request.session:
        request.session['amount_spent'] = 0 
    return render(request, 'app/index.html',{'item':items})


def buy(request):
    r,p = request.session, request.POST
    r['item_count'] += int(p['cuant'])
    spent = float(p['cuant'])*float(p['price'])
    r['amount_spent'] += spent
    r['spent'] = spent 
    print(request.POST['cuant'])
    return redirect('/checkout')

def checkout(request):
    return render(request, 'app/checkout.html')
