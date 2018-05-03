from flask import Flask, redirect, render_template, request
import time as t 
app = Flask(__name__)


def makeData(obj):
    cur_time = t.localtime()
    s = ' <p> we ordered ' +str( int(obj['straw']) +  int(obj['raz']) + int(obj['apple']))+ '</p>'
    s += 'was bought on ' + t.strftime('%m-%d-%Y-%H', cur_time) + '</p>'
    for x in obj:
        s += '<p>' + x + ' ' + str(obj[x]) + '</p>'
    return s  

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/checkout', methods=['POST'])
def check():
    data = makeData(request.form)
    return render_template('/checkout.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)