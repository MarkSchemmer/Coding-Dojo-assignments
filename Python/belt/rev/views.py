from django.shortcuts import render, redirect
from django.urls import reverse
from .models import * 

# Create your views here.

def books(request):
    try:
        recent_reviews = Review.obj.all()[::-1][:3]
    except:
        recent_reviews = []
    all_books = Book.obj.all()
    context={
        'reviews':recent_reviews,
        'all_books':all_books,
    }
    return render(request, 'rev/books.html', context)

def logout(request):
    request.session.flush()
    return redirect('/')


def add_book(request):
    return render(request, 'rev/add.html')


def new_review(request):
    book_id = Review.obj.make_review(request.POST)
    url = '/books/{}'.format(book_id)
    return redirect(url)


def book_review(request, id):
    book = Book.obj.get(id=id)
    all_reviews = book.book_reviews.all()
    context = {
        'book_name':book.title,
        'book_id':book.id,
        'author':book.author,
        'author_id':book.author.id,
        'reviews':all_reviews,
    }
    return render(request, 'rev/book_review.html', context)


def books_new_review(request, id):
    Review.obj.make_new_review_(request.POST)
    return redirect('/books/'+id)


def user_page(request,id):
    this_user = User.obj.get(id=id)
    all_reviews = this_user.reviews.all()
    count = all_reviews.count()
    context = {
        'user':this_user,
        'reviews':all_reviews,
        'count':count,
    } 
    return render(request, 'rev/user_page.html', context)