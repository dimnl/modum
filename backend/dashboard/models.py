from django.db import models

# Country information.
class Country(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    trust_index = models.FloatField(default=0.00)

    def _str_(self):
        return self.name

# Sectors information.
class Sector(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()

    def _str_(self):
        return self.name

# Measures information.
class Measure(models.Model):
    description = models.TextField()

    def _str_(self):
        return self.name
