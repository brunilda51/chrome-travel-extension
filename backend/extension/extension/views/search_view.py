from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from ..models import  Place, Search, User
from django.core.exceptions import ObjectDoesNotExist
import random
from django.utils import timezone

@csrf_exempt
def search_list(request):
    if request.method == 'GET':
        searches = Search.objects.all()
        data = [{'id': search.id, 'sustainability_score': search.sustainability_score, 'origin_code': search.origin_code, 'destination_code': search.destination_code, 'flight_duration': search.flight_duration} for search in searches]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        body = request.body.decode('utf-8')
        
        data = json.loads(body)
        search_data = {
            'sustainability_score': random.randint(1, 5), 
            'origin_code': data.get('origin_code'),
            "user_id": 1,
            'destination_code': data.get('destination_code'),
            'departure_date': data.get('departure_date', timezone.now().date()),  
            'arrival_date': data.get('arrival_date', timezone.now().date())  
        }
        search = Search.objects.create(**search_data)
        
        response_data = {
            'id': search.id,
            'origin_code': search.origin_code,
            'sustainability_score': search.sustainability_score,
            'destination_code': search.destination_code,
            'departure_date': search.departure_date,
            'arrival_date': search.arrival_date
        }
        return JsonResponse(response_data)

@csrf_exempt
def search_detail(request, pk):
    try:
        search = Search.objects.get(pk=pk)
    except Search.DoesNotExist:
        return JsonResponse({'error': 'Search does not exist'}, status=404)
    
    if request.method == 'GET':
        data = {'id': search.id, 'sustainability_score': search.sustainability_score, 'origin_code': search.origin_code, 'destination_code': search.destination_code, 'flight_duration': search.flight_duration}
        return JsonResponse(data)
    
    elif request.method == 'PUT':
        search.sustainability_score = data.get('sustainability_score')
        search.origin_code = data.get('origin_code')
        search.destination_code = data.get('destination_code')
        search.save()
        return JsonResponse({'message': 'Search updated successfully'})
    
    elif request.method == 'DELETE':
        search.delete()
        return JsonResponse({'message': 'Search deleted successfully'}, status=204)
