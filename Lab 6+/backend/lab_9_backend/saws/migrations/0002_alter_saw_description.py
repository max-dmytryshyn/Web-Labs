# Generated by Django 3.2.9 on 2021-11-13 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('saws', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saw',
            name='description',
            field=models.TextField(null=True),
        ),
    ]
