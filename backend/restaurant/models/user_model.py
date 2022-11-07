from django.db import models
from .restaurant_model import Restaurant

class User(models.Model):
    userType = models.IntegerField(default = 0)
    name = models.TextField(null = True)
    email = models.TextField(primary_key = True)
    password = models.TextField(null = True)
    mailingAddress = models.TextField(null = True)
    billingAddress = models.TextField(blank = True)
    preferredRestaurant = models.OneToOneField(Restaurant, on_delete = models.CASCADE, null = True)
    points = models.IntegerField(default = 0)
    preferredPaymentMethod = models.IntegerField(default = 1)
    
    '''
    reservations - many to many relationship with reservation table
    '''
    
    def _str_(self):
        return self
