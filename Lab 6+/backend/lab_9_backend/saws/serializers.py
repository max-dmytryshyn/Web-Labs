from rest_framework import serializers

from .models import Saw


class SawSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saw
        fields = '__all__'
