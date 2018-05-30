from django.urls import path, re_path, reverse
from . import views

app_name='review'
urlpatterns=[
    path('books', views.books, name='books'),
    path('books/logout', views.logout),
    path('books/add', views.add_book, name='add_book'),
    path('books/new_review', views.new_review),
    re_path(r'books/(?P<id>\d+)', views.book_review, name='book_review'),
    re_path(r'books/new_review/(?P<id>\d+)', views.books_new_review),
    re_path(r'user/(?P<id>\d+)', views.user_page)
]