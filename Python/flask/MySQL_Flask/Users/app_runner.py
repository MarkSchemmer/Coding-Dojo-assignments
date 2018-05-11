from flask import Flask,request,redirect,render_template,session,flash
from connection import connectToMySQL
from flask_bcrypt import Bcrypt
import re 
from query_class import creating_query_db
query = creating_query_db('users')

app = Flask(__name__)
bcrypt = Bcrypt(app)
re_email = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

encrypt_pass = lambda pas : bcrypt.generate_password_hash(pas)
check_pass = lambda hashed, pas : bcrypt.check_password_hash(hashed, pas)

@app.route('/',methods=['GET'])
def users():
    return render_template('index.html',users=query.get_users())

@app.route('/show_user/<id>',methods=['GET'])
def show_user(id):
    return render_template('user_page.html',users=query.get_user({'id':id})[0].values())

@app.route('/delete_user/<id>',methods=['GET'])
def delete_user(id):
    query.delete_user({'id':id})
    return redirect('/')

@app.route('/add_user',methods=['POST','GET'])
def add_user():
    if request.method == 'GET':
        return render_template('add_user.html')
    if request.method == 'POST':
        r = request.form
        first_name,last_name,email = r['first_name'],r['last_name'],r['email']
        data = {
            'first_name':first_name,
            'last_name':last_name,
            'email':email
        }
        query.create_user(data)
        return redirect('/')

@app.route('/edit_user/<id>',methods=['GET'])
def edit_user(id):
    return render_template('edit_user.html',user=query.get_user({'id':id}))

@app.route('/update_user',methods=['POST'])
def update_user():
    r = request.form 
    data = {
        'first_name':r['first_name'],
        'last_name' : r['last_name'],
        'email': r['email'],
        'id':r['id']
        }
    query.update_user(data)
    return redirect('/')

@app.route('/go_back',methods=['GET'])
def go_back():
    return redirect('/')

if __name__ == '__main__':
    app.secret_key='dojo'
    app.run(debug=True)