from django.db import models

class Restaurant(models.Model):
    restaurantNumber = models.AutoField(primary_key = True)
    
    def _str_(self):
        return self
