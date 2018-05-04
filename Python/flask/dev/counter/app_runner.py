from flask import Flask, render_template, request,  redirect, session
import os 
app = Flask(__name__)

# when I want to clear session data use session.clear()

@app.route('/')
def index():
    if 'count' not in session:
        session['count'] = 1
    return render_template('index.html',count=session['count'])

@app.route('/',methods=['POST'])
def add():
    print(request.form)
    print(session)
    print(request.form.get('cl'))

    if request.form.get('cl') == 'clear':
        session.clear()

    if request.form.get('a') == 'counter':
        session['count'] += 2

    return redirect('/')


if __name__ == '__main__':
    app.secret_key = 'dojo'
    app.run(debug=True)