from connection import connectToMySQL

class query__db:
    def __init__(self,db_name):
        self.db = connectToMySQL(db_name)
    def get_users(self):
        query= '''SELECT u.id, CONCAT_WS(' ', u.first_name,u.last_name) AS full_name, u.email, DATE_FORMAT(u.created_at, '%M %e %Y') AS t
                  FROM user u;'''
        return self.db.query_db(query)
    def create_user(self,data):
        query = '''INSERT INTO user (first_name,last_name,email,created_at) 
                   VALUES (%(first_name)s,%(last_name)s,%(email)s,NOW());'''
        return self.db.query_db(query,data)
    def get_user(self,data):
        query = '''SELECT * FROM user WHERE id=%(id)s;'''
        return self.db.query_db(query,data) 
    def update_user(self,data):
        query = '''UPDATE user 
                   SET first_name=%(first_name)s, last_name=%(last_name)s, email=%(email)s
                   WHERE id = %(id)s; '''
        return self.db.query_db(query,data)
    def delete_user(self,data):
        query = '''DELETE FROM user WHERE id = %(id)s;'''
        return self.db.query_db(query,data)


def creating_query_db(db):
    return query__db(db)
