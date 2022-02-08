from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from .models import UserAccount

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserAccount
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'passwrd': {'write_only':True}}