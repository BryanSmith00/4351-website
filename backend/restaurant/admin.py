from django.contrib import admin
from .models import Todo
from .models import User

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
    
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'password')

# Register your models here.

admin.site.register(Todo, TodoAdmin)

admin.site.register(User, UserAdmin)
