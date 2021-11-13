from django.utils.translation import gettext_lazy
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Saw(models.Model):

    class DriveType(models.TextChoices):
        MECHANICAL = 'MEC', gettext_lazy('Mechanical')
        ELECTRIC = 'ELC', gettext_lazy('Electric')
        INTERNAL_COMBUSTION_ENGINE = 'ICE', gettext_lazy('Internal combustion engine')

    class MaterialToSaw(models.TextChoices):
        WOOD = 'WO', gettext_lazy('Wood')
        METAL = 'ME', gettext_lazy('Metal')
        POLYFOAM = 'PO', gettext_lazy('Polyfoam')

    name = models.CharField(max_length=100)
    description = models.TextField(null=True)
    drive_type = models.CharField(max_length=3, choices=DriveType.choices, default=DriveType.MECHANICAL)
    material_to_saw = models.CharField(max_length=2, choices=MaterialToSaw.choices, default=MaterialToSaw.WOOD)
    blade_material = models.CharField(max_length=30)
    handle_material = models.CharField(max_length=30)
    length = models.FloatField(validators=[MinValueValidator(0.0)])
    price = models.FloatField(validators=[MinValueValidator(0.0)])

    class Meta:
        db_table = "saws"
