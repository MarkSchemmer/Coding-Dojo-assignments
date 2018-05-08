from flask import Flask, render_template, session, redirect, request
from connection import connectToMySQL
import datetime 
app = Flask(__name__)

class querys:  
    def __init__(self,db_name):
        self.db = connectToMySQL(db_name)
    def get_users(self):
        query = '''
                    SELECT f.first_name, f.last_name, f.occupation
                    FROM friend f;
                '''
        return self.db.query_db(query)

    def create_user(self,first_name,last_name,occupation,data):
        query = 'INSERT INTO friend (first_name,last_name,occupation,created_at,updated_at) VALUES(%(first_name)s,%(last_name)s,%(occupation)s,NOW(),NOW());'
        return self.db.query_db(query,data)

query = querys('friends')

def results_query(data):
    s = '<div class="group">'
    for x in data:
        s += ''
        for y in x:   
          s+= '<div class="friend table">'
          s += '<label for="name">'+str(y)+'</label>'
          s+= '<span name="name">'+str(x[y])+'</span>'
          s+='</div>'
    s+='</div>'
    return s
            
@app.route('/')
def index():
    user_data = results_query(query.get_users())
    return render_template('index.html',user_data=user_data)

@app.route('/',methods=['POST'])
def index_data():
    r = request.form
    first_name,last_name,occupation = r['first_name'],r['last_name'],r['oc']
    data = {
        'first_name':first_name,
        'last_name':last_name,
        'occupation':occupation
    }

    query.create_user(first_name,last_name,occupation,data)
    print(request.form['oc'])
    return redirect('/')

if __name__ == '__main__':
    app.secret_key = 'dojo'
    app.run(debug=True)