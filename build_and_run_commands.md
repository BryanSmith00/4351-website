# starting the application

## backend

### Whenever changes are made to the backend models you must run

1. cd backend
2. pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
3. python manage.py migrate
4. python manage.py runserver

creating a user
python manage.py createsuperuser --username vitor --email vitor@example.com

logging in via a post request
http POST :8000/login/ username=vitor password=password#1

getting profile with session cookie returned from post
http GET :8000/profile/ Cookie:sessionid=qs5uvi7tqcmkliapojsj022td7kfetye

## frontend

1. cd frontend
2. npm install
