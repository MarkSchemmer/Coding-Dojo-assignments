from django.db import models

# Create your models here.

class Dojos(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    desc = models.TextField()
    def __str__(self):
        return self.name


class Ninjas(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    dojo_id = models.ForeignKey(Dojos,related_name='dojo_id', on_delete=models.CASCADE)
    def __str__(self):
        return '{} {}'.format(self.first_name, self.last_name)