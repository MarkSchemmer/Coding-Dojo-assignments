from django.db import models
from login_regis.models import * 
# Create your models here.


class ReviewManager(models.Manager):
    def make_review(self, post_data):
        this_user = User.obj.get(id=post_data['user_id'])
        this_author = Author.obj.create(
            name=post_data['author']
        )
        this_book = Book.obj.create(
            title=post_data['title'],
            author=this_author
        )
        this_review = self.create(
            desc=post_data['review'],
            rating=post_data['rate'],
            reviewer=this_user,
            book=this_book,
        )
        this_review.book_reviews.add(this_book)
        return this_book.id
    def make_new_review_(self, post_data):
        this_user = User.obj.get(id=post_data['user_id'])
        this_author = Author.obj.get(id=post_data['author_id'])
        this_book = Book.obj.get(id=post_data['book_id'])
        this_review = self.create(
            desc=post_data['review'],
            rating=post_data['rate'],
            reviewer=this_user,
            book=this_book,
        )
        this_review.book_reviews.add(this_book)
class BookManager(models.Manager):
    pass

class AuthorManager(models.Manager):
    pass

class Author(models.Model):
    name = models.CharField(max_length=255)
    obj = AuthorManager()

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(
        Author, 
        related_name='books', 
        on_delete=models.CASCADE
    )
    obj = BookManager() 



class Review(models.Model):
    desc = models.TextField()
    rating = models.IntegerField()
    reviewer = models.ForeignKey(
        User, 
        related_name='reviews',
        on_delete=models.CASCADE 
    )
    book = models.ForeignKey(
        Book,
        related_name='reviews',
        on_delete=models.CASCADE
    )
    book_reviews = models.ManyToManyField(
        Book,
        related_name='book_reviews'
    )
    obj = ReviewManager()
