from django.db import models

# Create your models here.

# Country information.
class Country(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    trust_index = models.FloatField(default=0.00)

    def _str_(self):
        return self.name
