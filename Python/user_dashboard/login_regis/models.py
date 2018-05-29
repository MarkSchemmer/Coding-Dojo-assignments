from django.db import models
import re as r 
import bcrypt
# Create your models here.
re_email = r.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class UserManager(models.Manager):
    
    def registration(self, postData):
        result, errors = {}, {}
        if len(postData['first_name']) < 2:
            errors['first_name'] = 'first name must be bigger than 2 chars'
        if len(postData['last_name']) < 2:
            errors['last_name'] = 'last name must be bigger than 2 chars'
        if not re_email.match(postData['email']):
            errors['email'] = 'email must be in proper format'
        if len(postData['ps']) < 8 :
            errors['ps'] = ['length of password must 8 or more chars']
        if postData['ps'] != postData['psconf']:
            errors['ps'].append('password must match confirmation password')
        if len(errors) == 0:
            hash_pw = bcrypt.hashpw(postData['ps'].encode(), bcrypt.gensalt()).decode('utf-8')
            result['user'] = self.create(
                first_name=postData['first_name'],
                last_name=postData['last_name'],
                email=postData['email'],
                password=hash_pw)    
        if len(self.all()) == 1:
            result['user'].is_admin = True 
            result['user'].save()
        result['errors'] = errors
        return result

    def login(self, postData):
        print(postData)
        result, errors, input_pass = {}, {}, postData['ps']
        user = self.filter(email=postData['email'])
        print(user[0].password)
        print(postData['ps'].encode())
        if len(user) > 1 or len(user) < 1:
            errors['login_error'] = 'Login error'
        elif not bcrypt.checkpw(input_pass.encode('utf-8'), user[0].password.encode('utf-8')):
            errors['login_error'] = 'Login error'
        result['errors'] = errors
        if len(errors) == 0:
            result['user'] = user[0]
        return result

    def info(self, postData):
        user = self.filter(id = postData['id'])[0]
        user.first_name = postData['first_name']
        user.last_name = postData['last_name']
        user.email = postData['email']
        user.save()

    def admin_info(self, postData):
        user = self.filter(id = postData['id'])[0]
        user.first_name = postData['first_name']
        user.last_name = postData['last_name']
        user.email = postData['email']
        if postData['inputState'] == 'admin':
            user.is_admin = True
        else :
            user.is_admin = False 
        user.save()
    
    def delete_user(self, id):
        user = self.filter(id=id)[0]
        user.delete()

    def desc(self, postData):
        user = self.filter(id = postData['id'])[0]
        user.description = postData['desc']
        user.save()

    def update_pass(self,postData):
        user = self.filter(id = postData['id'])[0]
        user.password = bcrypt.hashpw(postData['ps'].encode(), bcrypt.gensalt()).decode('utf-8')
        user.save()

    
 

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    is_admin = models.BooleanField(default=False)
    user_authenticated = models.BooleanField(default=True)
    description = models.TextField()
    def __str__(self):
        return '{} {}'.format(self.first_name, self.last_name)
    obj = UserManager()
    