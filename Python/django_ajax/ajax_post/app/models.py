from django.db import models

# Create your models here.

class NoteManager(models.Manager):
    def create_note(self,post_data): self.create(note=post_data['note'])
    def notes_rev(self): return self.all().order_by('-id')

class Note(models.Model):
    note = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    obj = NoteManager()