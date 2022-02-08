from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, generics
from rest_framework.response import Response
from .serializer import UserCreateSerializer
from .models import UserAccount
# Create your views here.

class AccountView(generics.CreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserCreateSerializer