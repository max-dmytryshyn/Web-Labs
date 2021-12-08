from rest_framework import viewsets

from .models import Saw
from .serializers import SawSerializer


class SawViewSet(viewsets.ModelViewSet):

    queryset = Saw.objects.all()
    serializer_class = SawSerializer

    def get_queryset(self):
        queryset = Saw.objects.all()
        min_length = self.request.query_params.get('min_length')
        max_length = self.request.query_params.get('max_length')
        drive_type = self.request.query_params.get('drive_type')
        material_to_saw = self.request.query_params.get('material_to_saw')

        if drive_type:
            queryset = queryset.filter(drive_type = drive_type)

        if material_to_saw:
            queryset = queryset.filter(material_to_saw = material_to_saw)

        if min_length:
            queryset = queryset.filter(length__gt = min_length)

        if max_length:
            queryset = queryset.filter(length__lte = max_length)

        queryset = queryset.order_by('id')
        return queryset
