# Generated by Django 3.2.9 on 2021-11-22 11:31

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('saws', '0002_alter_saw_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saw',
            name='length',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(0.0), django.core.validators.MaxValueValidator(150.0)]),
        ),
    ]
