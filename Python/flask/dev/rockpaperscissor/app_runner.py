from flask import Flask, redirect, render_template, request
import os 
from functools import reduce as rd
from random import randint as rnd 
app = Flask(__name__)

m = lambda src : '<img src="../static/img/'+src+'"/>'
photos = [m(file) for file in os.listdir('./static/img')]
options = ['select','rock', 'paper', 'scissors']
final_photos = dict(zip(options[1:], photos))


def ai():
    pic = options[1:]
    return pic[rnd(0,2)]


def build_form(name,de):
    print(name)
    if de == 'AI':
        return ''
    s = '<form><select>'
    for x in options:
        s += '<option name="'+x+'" value="'+x+'">'+ x +'</option>'
    s += '</select></form>' 
    return s 

def gen_play_page(obj):
    s = ''
    for x in obj:
        s += '<div class="'+x+'">'
        s += '<h1>'+ obj[str(x)]+ '</h1>'
        s += build_form(x,obj[x])
        s += '</div>'
    return s 


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/play', methods=['POST'])
def play():
    names = [request.form[x] for x in request.form ]
    data = gen_play_page(request.form)
    return render_template('play.html',data=data,images=final_photos, names=names,options=options[1:], ai=ai())



if __name__ == '__main__':
    app.run(debug=True)