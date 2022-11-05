from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .serializers import UserSerializer
from .models import Todo
from .models import User

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
