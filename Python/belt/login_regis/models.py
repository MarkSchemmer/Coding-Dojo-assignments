from django.db import models
import re as r 
import bcrypt
# Create your models here.
re_email = r.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class UserManager(models.Manager):
    
    def registration(self, postData):
        result, errors = {}, {}
        if len(postData['name']) < 2:
            errors['name'] = 'first name must be bigger than 2 chars'
        if len(postData['alias']) < 2:
            errors['alias'] = 'last name must be bigger than 2 chars'
        if not re_email.match(postData['email']):
            errors['email'] = 'email must be in proper format'
        if len(User.obj.filter(email=postData['email'])) > 1 :
            errors['email'] = 'duplicate email'
        if len(postData['ps']) < 8 :
            errors['ps'] = 'length of password must 8 or more chars'
        if postData['ps'] != postData['psconf']:
            errors['ps'] = 'password must match confirmation password'
        if len(errors) == 0:
            hash_pw = bcrypt.hashpw(postData['ps'].encode(), bcrypt.gensalt()).decode('utf-8')
            result['user'] = self.create(
                name=postData['name'],
                alias=postData['alias'],
                email=postData['email'],
                password=hash_pw)    
        if len(self.all()) == 1:
            result['user'].is_admin = True 
            result['user'].save()
        result['errors'] = errors
        return result

    def login(self, postData):
        result, errors, input_pass = {}, {}, postData['ps']
        user = self.filter(email=postData['email'])
        if len(user) > 1 or len(user) < 1:
            errors['login_error'] = 'Login error'
        elif not bcrypt.checkpw(input_pass.encode('utf-8'), user[0].password.encode('utf-8')):
            errors['login_error'] = 'Login error'
        result['errors'] = errors
        if len(errors) == 0:
            result['user'] = user[0]
        return result

    

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    user_authenticated = models.BooleanField(default=True)
    def __str__(self):
        return '{}'.format(self.alias)
    obj = UserManager()
    