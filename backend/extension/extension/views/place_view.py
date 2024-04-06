from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from ..models import  Place, Search, User
from django.core.exceptions import ObjectDoesNotExist
# Views for Place model
@csrf_exempt
def place_list(request):
    if request.method == 'GET':
        places = Place.objects.all()
        data = [{'id': place.id, 'city_name': place.city_name, 'country_name': place.country_name, 'description': place.description, 'code': place.code} for place in places]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        body = request.body.decode('utf-8')
        
        # Parse the JSON data
        data = json.loads(body)
        place_data = {
            'city_name': data.get('city_name'),
            'country_name': data.get('country_name'),
            'code': data.get('code'),
            'description': data.get('description')
        }
        place = Place.objects.create(**place_data)
        return JsonResponse({'id': place.id, 'city_name': place.city_name, 'country_name': place.country_name, 'description': place.description})

@csrf_exempt
def place_detail(request, pk):
    try:
        place = Place.objects.get(pk=pk)
    except Place.DoesNotExist:
        return JsonResponse({'error': 'Place does not exist'}, status=404)
    
    if request.method == 'GET':
        data = {'id': place.id, 'city_name': place.city_name, 'country_name': place.country_name, 'description': place.description}
        return JsonResponse(data)
    
    elif request.method == 'PUT':
        place.city_name = data.get('city_name')
        place.country_name = data.get('country_name')
        place.description = data.get('description')
        place.code = data.get('code')
        place.save()
        return JsonResponse({'message': 'Place updated successfully'})
    
    elif request.method == 'DELETE':
        place.delete()
        return JsonResponse({'message': 'Place deleted successfully'}, status=204)
