# Generated by Django 3.2.9 on 2021-11-13 12:41

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Saw',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('drive_type', models.CharField(choices=[('MEC', 'Mechanical'), ('ELC', 'Electric'), ('ICE', 'Internal combustion engine')], default='MEC', max_length=3)),
                ('material_to_saw', models.CharField(choices=[('WO', 'Wood'), ('ME', 'Metal'), ('PO', 'Polyfoam')], default='WO', max_length=2)),
                ('blade_material', models.CharField(max_length=30)),
                ('handle_material', models.CharField(max_length=30)),
                ('length', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0)])),
                ('price', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0)])),
            ],
            options={
                'db_table': 'saws',
            },
        ),
    ]
