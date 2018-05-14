
from django.db import models
# Create your models here.

class Book(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name 

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    books = models.ManyToManyField(Book, related_name='bk')
    def __str__(self):
        return '{} {}'.format(self.first_name, self.last_name)



# commands for Books/Authors
''' 

Book.objects.create(name='C sharp')
Book.objects.create(name='Java')
Book.objects.create(name='Python')
Book.objects.create(name='PHP')
Book.objects.create(name='Ruby')


Author.objects.create(first_name='Mike')
Author.objects.create(first_name='Speros')
Author.objects.create(first_name='John')
Author.objects.create(first_name='Jadee')
Author.objects.create(first_name='Jay')

1:
    fith_book = Book.objects.get(id=5)
    fith_book.name='C#'
    fith_book.save()

2:
        fith_author = Author.objects.get(id=5)
        fith_author.name='C#'
        fith_author.save()

to get the range of set in orm django 
book_range= Book.objects.filter(id__gt=2,id__lt=6)


3:
    first_author = Author.objects.get(id=1)
    first_author.books.add(Book.objects.get(id=1))
    first_author.books.add(Book.objects.get(id=2))

4:
    >>> sec_author = Author.objects.get(id=2)
>>> sec_author
<Author: Speros >
>>> sec_author.books.add(Book.objects.get(id=1))
>>> sec_author.books.add(Book.objects.get(id=2))
>>> sec_author.books.add(Book.objects.get(id=3))
>>> sec_author.books
<django.db.models.fields.related_descriptors.create_forward_many_to_many_manager.<locals>.ManyRelatedManager object at 0x05F364B0>
>>> sec_author.books.all()
<QuerySet [<Book: C sharp>, <Book: Java>, <Book: Python>]>  


5: I'm taking a new appoach to this problem......
   Assign the third author to the first 4 books
    third_author = Author.objects.get(id=3)
    first_four_books = Book.objects.filter(id__lt=5)
    third_author.books.add(*first_four_books)


6: Assign fourth author all 5 books 
 fourth_author = Author.objects.get(id=4)
 fourth_author.books.add(*list(Book.objects.all()))

7: for the 3rd book retrieve all authors 
  Book.objects.get(id=3).bk.all()

8: for the 3rd book remove first author 
     third_book.bk.set(list(Book.objects.get(id=3).bk.all())[1:])
     .remove( I think it takes a param!!!)

9: for the second book add the 5th author as one of the authors

    >>> sec_bk = Book.objects.get(id=2)
    >>> sec_bk
    <Book: Java>
    >>> sec_bk.bk.all()
    <QuerySet [<Author: Mike >, <Author: Speros >, <Author: John >, <Author: Jadee >]>
    >>> sec_bk.bk.add(Author.objects.get(id=5))
    >>> sec_bk.bk.all()
    <QuerySet [<Author: Mike >, <Author: Speros >, <Author: John >, <Author: Jadee >, <Author: Jay >]>

10: Find all the books that the 3rd author is part of: 
    Book.objects.all().filter(bk=third_aut)

11: find all the books that the 2nd author is part of : 
    sec_aut = Author.objects.get(id=2)
    Book.objects.all().filter(bk=sec_aut)
'''