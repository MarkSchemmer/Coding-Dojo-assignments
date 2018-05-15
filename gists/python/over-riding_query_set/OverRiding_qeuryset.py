from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q 
from django.urls import reverse
from django.core.validators import MaxValueValidator, MinValueValidator


class GamesQuerySet(models.QuerySet):
    def games_for_user(self, user):
        return self.filter(
            Q(first_player=user) | Q(second_player=user)
        )

    def active(self):
        return self.filter(
            Q(status='F') | Q(status='S')
        )

    def total_games(self):
        return self.all().count()


class Game(models.Model):
    first_player = models.ForeignKey(User, related_name="games_first_player", 
                                     on_delete=models.CASCADE)
    second_player = models.ForeignKey(User, related_name="games_second_player",
                                      on_delete=models.CASCADE)
    last_active = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=1, default='F', choices=STATUS_OPTIONS)

    objects = GamesQuerySet.as_manager()



    '''

    make sure to use teh .as_manager() method so I don't have to use a models.manager


    '''