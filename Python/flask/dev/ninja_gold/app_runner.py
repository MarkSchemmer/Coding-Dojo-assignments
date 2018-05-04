from flask import Flask, render_template, redirect, request, session
import time as t 
from random import randint as rnd
app = Flask(__name__)

propertys = {   'farm':'( earns 10-20 golds)',
                'cave':'( earns 5-10 golds) ',
                'house': '(earns 2-5 golds) ',
                'casino': '( earns/takes 0-50 golds)'}

casinoChances = [False, True, False]
strFormat = lambda amount, prop, t : '<p class="green">Earned {} golds from the {}! ({})</p>'.format(amount,prop,t)
strCasinoFormat = lambda amount, t: '<p class="red">Earned 0 casino and lost {} golds...Ouch..({})</p>'.format(amount,t)
    

def genPropGold(prop):
    if prop == 'farm':
        return rnd(10,20)
    elif prop == 'cave':
        return rnd(5,10)
    elif prop == 'house':
        return rnd(2,5)
    else:
        return rnd(0,50)


def genTextAreaText(prop):
    cur_time = t.localtime()
    time = t.strftime('%m-%d-%Y-%H', cur_time)
    gold = genPropGold(prop)
    session['gold_count'] += int(gold)
    if prop == 'farm':
        return strFormat(gold,prop,time)
    elif prop == 'cave':
        return strFormat(gold,prop,time)
    elif prop == 'house':
        return strFormat(gold,prop,time)
    else :
        decide = casinoChances[rnd(0,2)]
        if decide:
            return strFormat(gold,prop,time)
        else:
            session['gold_count'] -= int(gold)*2
            return strCasinoFormat(gold,time)
    

def genPlaces(props):
    s = ''
    for x in props:
        s += '<div class="info">'
        s += '<h1>'+x+'</h1>'
        s += '<p>'+ props[x] + '</p>'
        s += '<form action="/process_money" method="POST">'
        s += '<input type="hidden" name="property" value="'+x+'">'
        s += '<input type="submit" value="submit"></form></div>'
    return s



@app.route('/')
def index():
    if 'gold_count' not in session:
        session['gold_count'] = 0
    if 'text_area' not in session:
        session['text_area'] = ''
    return render_template('index.html',gold=session['gold_count'],props=genPlaces(propertys), textArea=session['text_area'])

@app.route('/process_money', methods=['POST'])
def data_handle():
    if request.form.get('reset') == 'clear':
        session.clear()
        return redirect('/')
    prop = request.form.get('property')
    session['text_area'] += genTextAreaText(prop)
    return redirect('/')



if __name__ == '__main__':
    app.secret_key = 'dojo'
    app.run(debug=True)