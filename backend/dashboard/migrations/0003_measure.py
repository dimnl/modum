# Generated by Django 3.0.5 on 2020-05-02 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_sector'),
    ]

    operations = [
        migrations.CreateModel(
            name='Measure',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
            ],
        ),
    ]
