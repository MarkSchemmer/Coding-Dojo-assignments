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
    def get_users(self):
        query = '''SELECT * FROM users;'''
        return self.db.query_db(query)
    def add_message(self,data):
        query = '''INSERT INTO messages (message,users_id) VALUES (%(message)s,%(users_id)s); '''
        return self.db.query_db(query,data)
    def add_comment(self,data):
        query = '''INSERT INTO comments (comment,users_id,messages_id) VALUES (%(comment)s,%(users_id)s,%(messages_id)s); '''
        return self.db.query_db(query,data)
    def get_all_messages(self):
        query =  '''
                    SELECT m.message, u.user_name, u.id AS users_id, m.id 
                    FROM messages m 
                    JOIN users u ON u.id = m.users_id;
                 '''
        return self.db.query_db(query)
    def get_all_comments(self):
        query = '''SELECT * FROM comments'''
        return self.db.query_db(query)

query = query__db('mydb')

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
            #session['user_id'] = query_response[0]['id'] 
            return render_template('success.html',user=query.has_email({'email':email}),users=query.get_users(),messages=query.get_all_messages(),comments=query.get_all_comments())
    else:
        flash('Login Failed',category='failed_login')
    return redirect('/')

@app.route('/success',methods=['GET','POST'])
def success_page():
    if request.method == 'GET':
        return render_template('success.html',user=query.has_email({'email':session['email']}),users=query.get_users(),messages=query.get_all_messages(),comments=query.get_all_comments())
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
        #session['user_id'] = v[0]['id']
        return render_template('success.html',user=query.has_email({'email':email}),users=query.get_users(),messages=query.get_all_messages(),comments=query.get_all_comments())

@app.route('/logout',methods=['POST'])
def logout():
    return redirect('/')


@app.route('/make_message',methods=['POST'])
def make_message():
    print(request.form)
    message = request.form['message']
    users_id = request.form['user']
    data = {
            'message':message,
            'users_id':users_id
        }
    query.add_message(data)
    session['email'] = request.form['email']
    return redirect('/success')

@app.route('/make_comment',methods=['POST'])
def make_comment():
    r = request.form
    comment = r['comment']
    users_id = r['users_id']
    messages_id = r['messages_id']
    data = {
        'comment':comment,
        'users_id':users_id,
        'messages_id': messages_id
    }
    print(data)
    print(query.add_comment(data))
    return redirect('/success')



if __name__ == '__main__':
    app.secret_key='dojo'
    app.run(debug=True)