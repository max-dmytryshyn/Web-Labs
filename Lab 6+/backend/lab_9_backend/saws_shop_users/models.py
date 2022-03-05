from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager


class SawsShopUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)

    USERNAME_FIELD = 'email'

    objects = UserManager()

    class Meta:
        db_table = "saws_shop_user"

