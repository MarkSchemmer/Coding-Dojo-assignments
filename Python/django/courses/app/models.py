from django.db import models

# Create your models here.


class BlogManager(models.Manager):
    def is_validated(self, obj):
        errors = {}
        if len(obj['name']) < 2:
            errors['name'] = 'Name must be greater than 1 char'
        if len(obj['desc']) < 10 :
            errors['desc'] = 'Description must be greater than 10 chars'
        return errors
    def get_courses(self):
        return self.all()
    def save_course(self,data):
        course = self.create()
        course.name = data['name']
        course.desc = data['desc']
        course.save()
    def get_user(self,id):
        return self.get(id=id) 
    def delete_user(self,id):
        self.get(id=id).delete()



class Course(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    obj = BlogManager()