from flask import Flask, render_template
app = Flask(__name__)

users = [
   {'first_name' : 'Michael', 'last_name' : 'Choi'},
   {'first_name' : 'John', 'last_name' : 'Supsupin'},
   {'first_name' : 'Mark', 'last_name' : 'Guillen'},
   {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

td = lambda val : '<td>'+val+'</td>'

def make_table(users):
    s = '<table class="table"><tr class="col"> <th class="col"> User # </th> <th class="col"> First Name: </th>'
    s+='<th class="col"> Last Name </th> <th class="col"> Full Name </th>'
    s+=' <th class="col"> Full Name in UpperCase </th> '
    s+=' <th class="col">Length of full name</th> </tr>'

    for idx, x in enumerate(users):
        s += '<tr>'
        s += td(str(idx))
        s += td(x['first_name'])
        s += td(x['last_name'])
        s += td(x['first_name']+' '+x['last_name'])
        s += td( x['first_name']+' '+x['last_name'])
        s += td(str(len(x['first_name']+' '+x['last_name'])))
        s += '</tr>'
    s += '</table>'
    return s 

@app.route('/')
def index():
    return render_template('index.html',table=make_table(users))

if __name__ == '__main__':
    app.run(debug=True)