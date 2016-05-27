from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.views.generic import View

class Index(View):
    def get(self, request):
        params = {}
        params["name"] = "Django"
        return render(request, 'base.html', params)

class Profile(View):
    def get(self, request, username):
        params = dict()
        user = User.objects.get(username=username)
        fluts = Flut.objects.filter(user=user)
        params["fluts"] = fluts
        params["user"] = user
        return render(request, 'profile.html', params)