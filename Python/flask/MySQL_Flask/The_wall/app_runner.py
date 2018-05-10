from flask import Flask,request,redirect,render_template,session,flash
from connection import connectToMySQL
from flask_bcrypt import Bcrypt
import re 

app = Flask(__name__)
bcrypt = Bcrypt(app)
re_email = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

encrypt_pass = lambda pas : bcrypt.generate_password_hash(pas)
check_pass = lambda hashed, pas : bcrypt.check_password_hash(hashed, pas)

class query__db:
    def __init__(self,db_name):
        self.db = connectToMySQL(db_name)
    def has_email(self,data):
        query = ''' SELECT * FROM users 
                    WHERE email = %(email)s;
                    
                ''' 
        return self.db.query_db(query,data)
    def create_user(self,data):
        query = ''' 
                    INSERT INTO users (user_name,first_name,last_name,email,pass)
                    VALUES(
                        %(user_name)s,
                        %(first_name)s,
                        %(last_name)s,
                        %(email)s,
                        %(pass)s
                    );
            '''
        return self.db.query_db(query,data)
query = query__db('login')

@app.route('/',methods=['POST','GET'])
def login():
    if request.method == 'POST':
        return render_template('login.html')
    if request.method == 'GET':
        return render_template('login.html')
    return render_template('login.html')

@app.route('/reg',methods=['POST','GET'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    return render_template('register.html')


@app.route('/login_success',methods=['POST'])
def login_success():
    r = request.form
    email,paz= r['email'],r['pass']
    data = { 'email':email}
    query_response = query.has_email(data)
    if query_response : 
        encrypted_paz = query_response[0]['pass']
        if check_pass(encrypted_paz, paz):
            flash('login success!', category='success')
            session['user_id'] = query_response[0]['id'] 
            return render_template('success.html',user=query.has_email({'email':email}))
    else:
        flash('Login Failed',category='failed_login')
    return redirect('/')

@app.route('/success',methods=['GET','POST'])
def success_page():
    if request.method == 'GET':
        return render_template('success.html')
    r = request.form
    email = request.form['email']
    user_name,first_name,last_name = r['user_name'],r['first_name'],r['last_name']
    paz = request.form['pass']
    conf = request.form['conf']
    if request.method == 'POST':
        form = request.form.values()
        if all(  len(i) < 1 for i in form):
            flash('fields are blank!',category='blank')
        if not re.match(re_email, email):
            flash('Please enter a valid email address',category='email')
        if query.has_email({'email':email}):
            flash('email already exists', category='email')
        if len(paz) < 8 or len(conf) < 8 : 
            flash('password must be longer greater than 7 characters', category='password_length') 
        if paz != conf : 
            flash('password should match confirmatation password',category='password')
        if any(len(i) < 2 for i in [user_name,first_name,last_name]):
            flash('user-name, first-name, last-name must be greater than 2 chars ',category='names')

        if '_flashes' in session:
            return redirect('/reg')
        data = {
            'user_name':user_name,
            'first_name':first_name,
            'last_name':last_name,
            'email':email,
            'pass':encrypt_pass(paz)
        }
        query.create_user(data)
        flash('success!',category='success')
        v = query.has_email({'email':email})
        session['user_id'] = v[0]['id']
        return render_template('success.html',user=query.has_email({'email':email}))

@app.route('/logout',methods=['POST'])
def logout():
    session.pop('user_id')
    return redirect('/')



if __name__ == '__main__':
    app.secret_key='dojo'
    app.run(debug=True)