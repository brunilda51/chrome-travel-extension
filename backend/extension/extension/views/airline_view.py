from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ..models import Airline, Place, Search, User
from django.core.exceptions import ObjectDoesNotExist

# Views for Airline model
@csrf_exempt
def airline_list(request):
    if request.method == 'GET':
        airlines = Airline.objects.all()
        data = [{'id': airline.id, 'airline_name': airline.airline_name, 'sustainability_score': airline.sustainability_score, 'description': airline.description} for airline in airlines]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        airline_data = {
            'airline_name': request.POST.get('airline_name'),
            'sustainability_score': request.POST.get('sustainability_score'),
            'description': request.POST.get('description')
        }
        airline = Airline.objects.create(**airline_data)
        return JsonResponse({'id': airline.id, 'airline_name': airline.airline_name, 'sustainability_score': airline.sustainability_score, 'description': airline.description})

@csrf_exempt
def airline_detail(request, pk):
    try:
        airline = Airline.objects.get(pk=pk)
    except Airline.DoesNotExist:
        return JsonResponse({'error': 'Airline does not exist'}, status=404)
    
    if request.method == 'GET':
        data = {'id': airline.id, 'airline_name': airline.airline_name, 'sustainability_score': airline.sustainability_score, 'description': airline.description}
        return JsonResponse(data)
    
    elif request.method == 'PUT':
        airline.airline_name = request.POST.get('airline_name')
        airline.sustainability_score = request.POST.get('sustainability_score')
        airline.description = request.POST.get('description')
        airline.save()
        return JsonResponse({'message': 'Airline updated successfully'})
    
    elif request.method == 'DELETE':
        airline.delete()
        return JsonResponse({'message': 'Airline deleted successfully'}, status=204)

