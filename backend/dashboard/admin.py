from django.contrib import admin
from .models import Country, Sector, Measure

# Register models.

class CountryAdmin(admin.ModelAdmin):
      list_display = ('id', 'name', 'description', 'focus')

class SectorAdmin(admin.ModelAdmin):
      list_display = ('id', 'name', 'description')

class MeasureAdmin(admin.ModelAdmin):
      list_display = ('id', 'description')

admin.site.register(Country, CountryAdmin)
admin.site.register(Sector, SectorAdmin)
admin.site.register(Measure, MeasureAdmin)
