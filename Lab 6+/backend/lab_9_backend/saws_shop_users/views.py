from rest_framework import viewsets
from .serializers import SawsShopUserSerializer
from .models import SawsShopUser


class SawShopUserViewSet(viewsets.ModelViewSet):

    queryset = SawsShopUser.objects.all()
    serializer_class = SawsShopUserSerializer

