from django.db import models
from  login_regis.models import * 
# Create your models here.

class MessageManager(models.Manager):
    def make_message(self,post_data):
        user = User.obj.get(id=post_data['user_id'])
        new_message = Message.obj.create(
            message=post_data['message'],
        )
        user.all_messages.add(new_message)

class Message(models.Model):
    message = models.TextField()
    users = models.ManyToManyField(User, related_name='all_messages')
    obj = MessageManager()



