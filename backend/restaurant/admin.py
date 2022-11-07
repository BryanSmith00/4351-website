from django.contrib import admin
from .models import Todo
from .models import Restaurant
from .models import User

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
    
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('restaurantNumber',)
    
class UserAdmin(admin.ModelAdmin):
    list_display = ('userType', 'name', 'email', 'password', 'mailingAddress', 'billingAddress', 'preferredRestaurant', 'points', 'preferredPaymentMethod')
    
# Register your models here.

admin.site.register(Todo, TodoAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(User, UserAdmin)
