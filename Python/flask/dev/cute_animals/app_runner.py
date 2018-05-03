from flask import Flask, render_template, request, redirect
import os
from random import randint as rnd  
from functools import reduce as rd 
app = Flask(__name__)
files = [file for file in os.listdir('./static/img/')]

def genRandomFiles(num):
    num = int(num)
    arr = []
    if num > 12 : num = rnd(4,8)
    while num > 0:
        randomVal = rnd(0,11)
        if files[randomVal] not in arr :
            arr.append(files[randomVal])
            num = num - 1
    return arr 



m = lambda src : '<img src="../static/img/'+str(src)+'"/>'



def make_img(files):
    return rd(lambda acc, item: acc + m(item), files, '' )

@app.route('/')
@app.route('/<rand>')
@app.route('/<rand>/<d>')
def index(rand=4,d=''):
    if d == 'danger':
        return redirect('/danger')
    fi = genRandomFiles(rand)
    return render_template('index.html',img=make_img(fi))

@app.route('/danger')
def dang():
    return render_template('danger.html')

if __name__ == '__main__':
    app.run(debug=True)
