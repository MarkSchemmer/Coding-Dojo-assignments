from random import randint as rnd 
from flask import Flask,render_template,request,session,redirect
app = Flask(__name__)
rand = lambda : rnd(0,100)
@app.route('/')
def index():
    if 'display' not in session:
        session['display'] = ' '
        if 'new_rand' in session:
            session['new_rand'] = rand()
        else:
            session['new_rand'] = rand()
    return render_template('index.html', rand=session['new_rand'],display=session['display'])

@app.route('/', methods=['POST'])
def handData():
    try:
        num = int(request.form.get('guessed'))
        const = int(session['new_rand'])
        if num == 'NaN':
            session['display'] = num 
            session.pop('guess')
            return redirect('/')
        if num > const :
            session['guess'] = num
            session['display'] = 'high'
        elif num < const : 
            session['display'] = 'low'
            session['guess'] = num
        else :
            session['display'] = 'win'
            session.pop('guess')
        return redirect('/')
    except Exception:
        session.clear()
        return redirect('/')


if __name__ == '__main__':
    app.secret_key = 'dojo'
    app.run(debug=True)