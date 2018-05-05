from flask import Flask, render_template, request, redirect, session,flash
from functools import reduce as rd
app = Flask(__name__)
lans = ['python','C#','javascript','F#']
p = lambda x: print(x)

def genTable(keys, values):
    table = '<table class="table table-striped table-dark">'
    table += '<thead><tr>'
    table = rd(lambda acc, item: acc + '<th scope="col">' + item + '</th>', keys, table)
    table +=  '</tr></thead><tbody><tr>'
    table = rd(lambda acc,item: acc + '<td>'+item+'</td>',values,table)
    table += '</tbody></table>'
    return table 

@app.route('/',methods=['GET'])
def index():
    if 'name' not in session:
        session['name'] = ''
    if 'location' not in session:
        session['location'] = ''
    if 'comment' not in session:
        session['comment'] = ''
    if 'cs' not in session:
        session['cs'] = ''
    if request.method == 'GET':
        session.clear()
    return render_template('index.html', session=session)


@app.route('/result')
def reultPage():
    keys, values  = [x for x in session][::-1], [session[x] for x in session][::-1]
    table = genTable(keys,values)
    return render_template('result.html',data=table)


# validation here I believe?
@app.route('/result', methods=['POST'])
def result():
    print(len(request.form['comment']))
    session['name'] = request.form['name']
    session['comment'] = request.form['comment']
    session['location'] = request.form['location']
    session['cs'] = request.form['cs']
    errors = True
    if len(request.form['name']) < 1:
        flash('Please input valid name')
        errors = False
    if len(request.form['comment']) > 120:
        flash('Comment must be less than 120 characters')
        errors = False
    if request.form['cs'] not in lans:
        flash('Please select a language')
        errors = False
    if errors:
        return redirect('/result')
    return render_template('index.html',session=session)
    

if __name__ == '__main__':
    app.secret_key='dojo'
    app.run(debug=True)