from rest_framework import serializers
from .models import SawsShopUser


class SawsShopUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SawsShopUser
        fields = "__all__"

    def create(self, validated_data):
        user = SawsShopUser.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.set_password(validated_data.get('password', instance.password))
        instance.save()
        return instance
