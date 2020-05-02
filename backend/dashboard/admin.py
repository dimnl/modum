from django.contrib import admin
from .models import Country, Sector

# Register models.

class CountryAdmin(admin.ModelAdmin):
      list_display = ('id', 'name', 'description', 'trust_index')

class SectorAdmin(admin.ModelAdmin):
      list_display = ('id', 'name', 'description')

admin.site.register(Country, CountryAdmin)
admin.site.register(Sector, SectorAdmin)
