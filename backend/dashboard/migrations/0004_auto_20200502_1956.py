# Generated by Django 3.0.5 on 2020-05-02 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_measure'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='country',
            name='trust_index',
        ),
        migrations.AddField(
            model_name='country',
            name='focus',
            field=models.CharField(default='', max_length=120),
        ),
    ]
