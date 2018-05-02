from flask import Flask 
from functools import reduce as rd 

app = Flask(__name__)

p = lambda x : print(x)

@app.route('/')
def helloWorld():
    p('hello world ')
    return 'Hello World'
@app.route('/dojo')
def dojo():
    return 'dojo'
@app.route('/say/<obj>')
def say(obj):
    return 'Hi '+obj
@app.route('/repeat/<num>/<obj>')
def repeat(num,obj):
    s = rd(lambda acc, item: acc + obj + '\n', [x for x in range(int(num))],'')
    return s


if __name__ == '__main__':
    app.run(debug=True)