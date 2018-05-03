from flask import Flask, render_template, redirect, request
app = Flask(__name__)

def generatFormData(obj):
    s = '<form action="/" method="GET">'
    s += '<h1> Submitted Data</h1><table>'
    for x in obj:
        s += '<tr>'
        s += '<td>' + x +'</td><td>'+ obj[x] + '</td>'
        s += '</tr>'
    s += '</table>'
    s += '<input type="submit" value="go back">'
    s += '</form>'
    return s



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def creatUser():
    data = generatFormData(request.form)
    return render_template('/result.html', data=data)



if __name__ == '__main__':
    app.run(debug=True)