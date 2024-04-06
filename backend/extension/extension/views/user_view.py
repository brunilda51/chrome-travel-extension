from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ..models import Airline, Place, Search, User
from django.core.exceptions import ObjectDoesNotExist
import json  # Import the json module
from django.db import IntegrityError  # Import IntegrityError from django.db module

# Views for User model
@csrf_exempt
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        data = [{'id': user.id, 'name': user.name, 'last_name': user.last_name, 'email': user.email, 'username': user.username, 'password': user.password, 'googleid': user.googleid} for user in users]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        body = request.body.decode('utf-8')
        
        # Parse the JSON data
        data = json.loads(body)
        user_data = {
            'name': data.get('name'),
            'last_name': data.get('last_name'),
            'email': data.get('email'),
            'username': data.get('username'),
            'password': data.get('password'),
            'googleid': data.get('googleid')
        }
        print(user_data)
        try:
            user = User.objects.create(**user_data)
            return JsonResponse({'id': user.id, 'name': user.name, 'last_name': user.last_name, 'email': user.email, 'username': user.username, 'password': user.password, 'googleid': user.googleid})
        except IntegrityError as e:
            return JsonResponse({'error': str(e)}, status=400)  # Return the error message if IntegrityError occurs
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
@csrf_exempt
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User does not exist'}, status=404)
    body = request.body.decode('utf-8')
        
    # Parse the JSON data
    data = json.loads(body)
    if request.method == 'GET':
        obj = {'id': user.id, 'name': user.name, 'last_name': user.last_name, 'email': user.email, 'username': user.username, 'password': user.password, 'googleid': user.googleid}
        return JsonResponse(obj)
    
    elif request.method == 'PUT':
        user.name = data.get('name')
        user.last_name = data.get('last_name')
        user.email = data.get('email')
        user.username = data.get('username')
        user.password = data.get('password')
        user.googleid = data.get('googleid')
        user.save()
        return JsonResponse({'message': 'User updated successfully'})
    
    elif request.method == 'DELETE':
        user.delete()
        return JsonResponse({'message': 'User deleted successfully'}, status=204)
