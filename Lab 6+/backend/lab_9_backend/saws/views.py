from rest_framework import viewsets

from .models import Saw
from .serializers import SawSerializer


class SawViewSet(viewsets.ModelViewSet):

    queryset = Saw.objects.all()
    serializer_class = SawSerializer
