from django.db import models
import bcrypt
import re as r 
# Create your models here.
re_email = r.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class ClassManager(models.Manager):
    def all_errors(self,obj):
        errors = {}
        if len(obj['first_name']) < 2 :
            errors['first_name'] = 'first name cannot be lesser than 2 chars'
        if len(obj['last_name']) < 2 : 
            errors['last_name'] = 'first name cannot be lesser than 2 chars'
        if  len(obj['ps']) < 8 : 
            errors['ps'] = ['password must be greater than 8 chars']
        if obj['ps'] != obj['psconf'] :
            errors['ps'].append('password must match confirmation passowrd')
        if not re_email.match(obj['email']):
            errors['email'] = 'email is not in correct format'
        if len(self.user_existed(obj['email'])) > 1 : 
            errors['email'] = 'email exists as well in data base'
        return errors 
    def user_existed(self,email):
        return self.filter(email=email)
    def get_user(self,id):
        return self.get(id=id)
    def add_user(self,data):
        c = self.create()
        c.first_name = data['first_name']
        c.last_name = data['last_name']
        c.email = data['email']
        c.password = bcrypt.hashpw(data['ps'].encode(), bcrypt.gensalt())
        c.save()
        


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    obj = ClassManager()