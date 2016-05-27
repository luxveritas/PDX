from django.db import models
from user_profile.models import User


# from django.contrib.auth import get_user_model
# def my_view(request):
# User = get_user_model()
class Flut(models.Model):
    user = models.ForeignKey(User)
    text = models.CharField(max_length=160)
    created_date = models.DateTimeField(auto_now_add=True)
    country = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)


    def __unicode__(self):
        return self.text


# Create your models here.
