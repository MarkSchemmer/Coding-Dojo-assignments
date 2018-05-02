from flask import Flask, render_template
from functools import reduce as rd 
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/play')
@app.route('/play/<num>')
@app.route('/play/<num>/<color>')
def play(num=3,color='blue'):
    box = '<div class="box blueBox"> </div>'
    return render_template('index.html',
    boxes=rd(lambda acc, item: acc + box, [x for x in range(int(num))], ''),
    color=color)
        

if __name__ == '__main__':
    app.run(debug=True)