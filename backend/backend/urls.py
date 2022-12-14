from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers
from restaurant import views

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')
router.register(r'Restaurants', views.RestaurantView, 'Restaurant')
router.register(r'Users', views.UserView, 'User')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('login/', views.LoginView.as_view()),
    path('profile/', views.ProfileView.as_view()),
]
