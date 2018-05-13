from django.db import models

# Create your models here.


class Users(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)




''' 

create a new user
b = Users(first_name='Mark',last_name='Schemmer',email='mjs.schemmer@gmail.com',age=23)
b.save()

other way 
Users.objects.create(first_name='jason',last_name='Schemmer',email='mjfsfsfdfsds.schemmer@gmail.com',age=25).save()


get all values of all users
Users.objects.all().values()

get the last user
User.objects.last()

get the first user
User.objects.first()


get users sorted by first_name in descending order
Users.objects.order_by("-first_name")

get person who has id of 3 and update 

b = Users.objects.get(id=3)
b.last_name = "new_name"
b.save()

How to delete a record from the database
b = Users.objects.get(id=3)
b.delete()
b.save()


'''