from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# Test view.
def index(request):
    return HttpResponse("Hello, world! You're at the dashboard index.")
