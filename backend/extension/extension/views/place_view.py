from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ..models import  Place, Search, User
from django.core.exceptions import ObjectDoesNotExist
# Views for Place model
@csrf_exempt
def place_list(request):
    if request.method == 'GET':
        places = Place.objects.all()
        data = [{'id': place.id, 'city_name': place.city_name, 'country_name': place.country_name, 'description': place.description} for place in places]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        place_data = {
            'city_name': request.POST.get('city_name'),
            'country_name': request.POST.get('country_name'),
            'code': request.POST.get('code'),
            'description': request.POST.get('description')
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
        place.city_name = request.POST.get('city_name')
        place.country_name = request.POST.get('country_name')
        place.description = request.POST.get('description')
        place.code = request.POST.get('code')
        place.save()
        return JsonResponse({'message': 'Place updated successfully'})
    
    elif request.method == 'DELETE':
        place.delete()
        return JsonResponse({'message': 'Place deleted successfully'}, status=204)
