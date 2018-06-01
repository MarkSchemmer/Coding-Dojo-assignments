from django.db import models

# Create your models here.


class UserManger(models.Manager):
    def create_user(self,post_data):
        user = self.create(
            first_name=post_data['first_name'],
            last_name=post_data['last_name'],
            email=post_data['email']
        )
        return user 

class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    obj = UserManger()