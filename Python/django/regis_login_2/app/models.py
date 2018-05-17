#from __future__ import unicode_literals
from django.db import models
import bcrypt
import re as r 
# Create your models here.
re_email = r.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class ClassManager(models.Manager):
    def registration(self,obj):
        results = {}
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
        if len(errors) == 0:
            ps = obj['ps']
            hash_ps = bcrypt.hashpw(ps.encode(), bcrypt.gensalt())
            print(hash_ps)
            results['new_user'] = self.create(first_name=obj['first_name'], last_name=obj['last_name'], email=obj['email'], password=hash_ps)
        results['errors'] = errors
        return results
    def login(self,post_data):
        results = {}
        errors = {}
        inputPass = post_data['ps']
        user = User.obj.filter(email=post_data['email'])
        if len(post_data['ps']) < 2 or len(post_data['email']) < 5:
            errors['login_error'] = 'login error' 
        if not user:
            errors['login_error'] = 'Login error'
        elif not bcrypt.checkpw(inputPass.encode(), user[0].password.encode()[2:][:-1]):
            errors['login_error'] = 'Login error'
        results['errors'] = errors
        if len(errors) == 0:
            results['user'] = user[0]
        return results
            
            





class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    obj = ClassManager()
