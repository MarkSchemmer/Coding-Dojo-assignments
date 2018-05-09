from flask import Flask,request,redirect,render_template,session,flash
from connection import connectToMySQL
from flask_bcrypt import Bcrypt
import re as r 

app = Flask(__name__)
bcrypt = Bcrypt(app)
re_email = r.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class query__db:
    def __init__(self,db_name):
        self.db = connectToMySQL(db_name)
    def get_emails(self):
        query = '''SELECT e.id, e.email, DATE_FORMAT(e.created_at,'%M %D %Y') AS _date FROM emails AS e;'''
        return self.db.query_db(query)
    def delete_emails(self,email,data):
        query = 'DELETE FROM emails WHERE emails.email = %(email)s;'
        return self.db.query_db(query,data)
    def has_id(self,email,data):
        query = 'SELECT * FROM emails WHERE emails.email = %(email)s'
        return self.db.query_db(query,data)
    def create_user(self,email,data):
        query =  '''  INSERT INTO emails (email,created_at,delete_email) 
                        VALUES(%(email)s,NOW(),False); '''
        return self.db.query_db(query,data)
    def clear_email_table(self,query):
  
        return self.db.query_db(query)

query = query__db('email')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/clear_email',methods=['POST'])
def delete_email():
    email = request.form['email']
    print(email)
    query.delete_emails(email,{'email':email})
    return redirect('/success')

@app.route('/',methods=['POST'])
def go_back():
    return redirect('/')


@app.route('/clear',methods=['POST'])
def clear():
    query0 = '''
                DROP TABLE emails;
         '''

    query2= '''
        
                   CREATE TABLE emails(
                    id INT NOT NULL AUTO_INCREMENT,
                    email VARCHAR(255) NOT NULL,
                    created_at DATETIME,
                    delete_email BOOLEAN,
                    PRIMARY KEY (id)
                    );
                
                 '''
    query.clear_email_table(query0)
    query.clear_email_table(query2)
    return render_template('index.html')


@app.route('/success',methods=['POST','GET'])
def success():
    r = request.form
    print(r)

    if request.method == 'GET':
        return render_template('success.html',data=query.get_emails())

    email = r['email']
    if len(email) < 5 or not re_email.match(email) :
        flash('Please enter valid email address',category='errors')            
        return redirect('/')
    if query.has_id(email,{'email':email}):
        flash('Email has already been taken',category='taken_email')
        print('email not here')
        return redirect('/')
    flash('Success you a new account', category='success')
    query.create_user(email,{'email':email})
    return render_template('success.html',data=query.get_emails())


if __name__ == '__main__':
    app.secret_key='dojo'
    app.run(debug=True)