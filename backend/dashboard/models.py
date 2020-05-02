from django.db import models

# Country information.
class Country(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    focus = models.CharField(max_length=120, default="")

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
