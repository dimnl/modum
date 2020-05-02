from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import CountrySerializer, SectorSerializer, MeasureSerializer
from .models import Country, Sector, Measure
import subprocess

def index(request):
    return HttpResponse("Hello, world! You're at the dashboard index.")

def graph(request):
    # TODO call the python process to generate the graph.
    path = "../frontend/src/"
    process = subprocess.run(['touch', 'test.png'],
                         stdout=subprocess.PIPE,
                         universal_newlines=True)
    process = subprocess.run(['mv', 'test.png', '../frontend/src/'],
                         stdout=subprocess.PIPE,
                         universal_newlines=True)
    return HttpResponse("Ok.")

class CountryView(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    queryset = Country.objects.all()

class SectorView(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    queryset = Sector.objects.all()

class MeasureView(viewsets.ModelViewSet):
    serializer_class = MeasureSerializer
    queryset = Measure.objects.all()
