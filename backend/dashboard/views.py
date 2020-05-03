from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import CountrySerializer, SectorSerializer, MeasureSerializer
from .models import Country, Sector, Measure
import subprocess, time

def index(request):
    return HttpResponse("Hello, world! You're at the dashboard index.")

def graph(request):
    # path = "../frontend/src/"
    # process = subprocess.run(['python3', '../correlation/StockPredict.py'],
    #                      stdout=subprocess.PIPE,
    #                      universal_newlines=True)
    # process = subprocess.run(['mv', 'graph.png', '../frontend/src/'],
    #                      stdout=subprocess.PIPE,
    #                      universal_newlines=True)
    # time.sleep(5)
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
