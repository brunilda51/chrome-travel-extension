from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ..models import  Place, Search, User
from django.core.exceptions import ObjectDoesNotExist

# Views for Search model
@csrf_exempt
def search_list(request):
    if request.method == 'GET':
        searches = Search.objects.all()
        data = [{'id': search.id, 'sustainability_score': search.sustainability_score, 'origin_id': search.origin_id, 'destination_id': search.destination_id, 'flight_duration': search.flight_duration} for search in searches]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        search_data = {
            'sustainability_score': request.POST.get('sustainability_score'),
            'origin_id': request.POST.get('origin_id'),
            'destination_id': request.POST.get('destination_id'),
            'flight_duration': request.POST.get('flight_duration')
        }
        search = Search.objects.create(**search_data)
        return JsonResponse({'id': search.id, 'sustainability_score': search.sustainability_score, 'origin_id': search.origin_id, 'destination_id': search.destination_id, 'flight_duration': search.flight_duration})

@csrf_exempt
def search_detail(request, pk):
    try:
        search = Search.objects.get(pk=pk)
    except Search.DoesNotExist:
        return JsonResponse({'error': 'Search does not exist'}, status=404)
    
    if request.method == 'GET':
        data = {'id': search.id, 'sustainability_score': search.sustainability_score, 'origin_id': search.origin_id, 'destination_id': search.destination_id, 'flight_duration': search.flight_duration}
        return JsonResponse(data)
    
    elif request.method == 'PUT':
        search.sustainability_score = request.POST.get('sustainability_score')
        search.origin_id = request.POST.get('origin_id')
        search.destination_id = request.POST.get('destination_id')
        search.flight_duration = request.POST.get('flight_duration')
        search.save()
        return JsonResponse({'message': 'Search updated successfully'})
    
    elif request.method == 'DELETE':
        search.delete()
        return JsonResponse({'message': 'Search deleted successfully'}, status=204)
