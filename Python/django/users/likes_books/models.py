from django.db import models

# Create your models here.



class Users(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.first_name

class Books(models.Model):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    liked_users = models.ManyToManyField(Users, related_name='liked_books') # change to books!
    uploader = models.ForeignKey(Users, related_name='book', on_delete=models.CASCADE) # change to book!
    def __str__(self):
        return self.name 
    

''' 
    giving a user a book
    Books.objects.create(name='name', uploader=Users_Object)

    * Have the first user like the last book and the first_book
    u1.users.add(*[x for x in list(Books.objects.all()) if x.id < 2 or x.id > 5 ])

    * Have the second user like the first book and the third book
    u2.users.add(*[x for x in list(Books.objects.all()) if x.id == 1 or x.id == 3 ])

    * Have the third user like all books
    u3.users.add(*list(Books.object.all()))

    * Display all users who like the first book
    book_one = Books.objects.get(id=1)
    book_one.liked_users.all()  

    Display the user who uploaded the first book
    book_one = Books.objects.get(id=1)
    book_one.uploader


    * Display all users who like the second book
    sec_book = Books.objects.get(id=2)
    sec_book.liked_users


    * Display the user who uploaded the second book
      sec_book=Books.objects.get(id=2)
      sec_book.uploader
    
'''