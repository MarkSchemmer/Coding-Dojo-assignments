from flask import Flask, render_template

app = Flask(__name__)


def deterMine_color(y,x):
    if x % 2 != 0 and y % 2 != 0 :
        return 'dark'
    elif x % 2 == 0 and y % 2 != 0 :
        return 'light'
    elif x % 2 != 0 and y % 2 == 0:
        return 'light'
    else:
        return 'dark'


def genBoard(y_=9,x_=9):
    s = ''
    for y in range(1,y_):
        s += '<div class="lev">'
        for x in range(1,x_):
            s += '<div class="sq '+deterMine_color(x,y)+'"></div>'
        s += '</div>'
    return s 

@app.route('/')
@app.route('/<x>/<y>')
def home(x=9,y=9):
    return render_template('index.html',board=genBoard(int(x),int(y)))


if __name__ == '__main__':
    app.run(debug=True)