from flask import Flask, render_template, request, redirect, session,flash
from functools import reduce
import re as r
app = Flask(__name__)

# add to gists!!!
re_em = r.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
noNums = r.compile(r'[^0-9]')

@app.route('/', methods=['POST','GET'])
def index(): 
    if request.method == 'GET':
        if 'email' not in session:
             session['email'] = ''
        if 'first_name' not in session:
            session['first_name'] = ''
        if 'last_name' not in session:
            session['last_name'] = ''
        if 'pass' not in session:
            session['pass'] = ''
        if 'conf' not in session:
            session['conf'] = ''
        return render_template('index.html',session=session)
    if request.method == 'POST':
        keys = [x for x in request.form]
        values = [request.form[x] for x in request.form]
        print(keys)
        print(values)
        req = request.form
        session['email'] = req['email']
        session['first_name'] = req['first_name']
        session['last_name'] = req['last_name']
        session['pass'] = req['pass']
        session['conf'] = req['conf']
        err,success,blank = [],None,None
        errors = True 
        if not re_em.match(req['email']):
             errors = False 
             err.append('Email is incorrect')
        if not noNums.match(req['first_name']):
            errors = False 
            err.append('No digits in first Name')
        if not noNums.match(req['last_name']):
            errors = False 
            err.append('No digits in last name')
        if len(req['pass']) < 8 :
            errors = False
            err.append('password should be more than 8 digits')
        if req['pass'] != req['conf']:
            errors = False
            err.append('Confirmation password should match Passowrd')
        if ' ' in values or '' in values:
            errors = False 
            blank = 'all fields must be filled in'
            err = None
        if errors:
            success = 'You were successfully logged In!'
            session.clear()
            return render_template('index.html', success=success)
        return render_template('index.html',session=session,errors=err,success=success,blank=blank)

if __name__ == '__main__':
    app.secret_key='dojo'
    app.run(debug=True)