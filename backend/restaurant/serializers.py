from rest_framework import serializers
from .models import Todo
from .models import Restaurant
from .models import User

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
        
class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('restaurantNumber',)
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('userType', 'name', 'email', 'password', 'mailingAddress', 'billingAddress', 'preferredRestaurant', 'points', 'preferredPaymentMethod')
