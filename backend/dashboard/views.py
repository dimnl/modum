from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import CountrySerializer
from .models import Country

# Test view.
def index(request):
    return HttpResponse("Hello, world! You're at the dashboard index.")

class CountryView(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    queryset = Country.objects.all()
