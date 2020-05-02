from rest_framework import serializers
from .models import Country, Sector, Measure

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name', 'description', 'focus')

class SectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name', 'description')

class MeasureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measure
        fields = ('id', 'description')
