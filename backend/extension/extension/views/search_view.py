from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from ..models import Search, User
from django.core.exceptions import ObjectDoesNotExist
import random
from django.utils import timezone
from datetime import datetime
from django.db import connection

@csrf_exempt
def search_list(request):
    if request.method == 'GET':
        searches = Search.objects.all()
        data = [{'id': search.id, 'sustainability_score': search.sustainability_score, 'origin_code': search.origin_code, 'destination_code': search.destination_code, 'departure_date': search.departure_date, 'arrival_date':search.arrival_date, 'timestamp_added':search.timestamp_added} for search in searches]
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        body = request.body.decode('utf-8')
        data = json.loads(body)

        # Parse departure and arrival dates based on the format
        if "-" in data.get('departure'):
            departure = datetime.strptime(data.get('departure'), "%Y-%m-%d")
            arrival = datetime.strptime(data.get('arrival'), "%Y-%m-%d")
        else:
            departure = datetime.strptime(data.get('departure'), "%y%m%d")
            arrival = datetime.strptime(data.get('arrival'), "%y%m%d")

        # Check if a search with the same origin_code, destination_code, and user_id exists
        existing_search = Search.objects.filter(
            origin_code=data.get('origin_code'),
            destination_code=data.get('destination_code'),
            user_id=1  # Assuming user_id is always 1 for this example
        ).first()

        if existing_search:
            # If a search already exists, return its details
            response_data = {
                'id': existing_search.id,
                'origin_code': existing_search.origin_code,
                'sustainability_score': existing_search.sustainability_score,
                'destination_code': existing_search.destination_code,
                'departure_date': existing_search.departure_date,
                'arrival_date': existing_search.arrival_date
            }
            return JsonResponse(response_data)
        else:
            # If no existing search found, create a new search record
            search_data = {
                'sustainability_score': random.randint(1, 5),
                'origin_code': data.get('origin_code'),
                'user_id': 1,
                'destination_code': data.get('destination_code'),
                'departure_date': departure,
                'arrival_date': arrival
            }
            search = Search.objects.create(**search_data)

            # Return details of the newly created search
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
        
def latest_destination_codes(request):
    # Execute raw SQL query to fetch the latest 5 distinct destination codes
    query = """
        SELECT destination_code, MAX(timestamp_added) AS latest_timestamp
        FROM extension.extension_search
        GROUP BY destination_code
        ORDER BY latest_timestamp DESC
        LIMIT 5;
    """
    with connection.cursor() as cursor:
        cursor.execute(query)
        rows = cursor.fetchall()

    # Extract destination codes from the query result
    destination_codes = [row[0] for row in rows]

    # Return the destination codes as a JSON response
    return JsonResponse({'destination_codes': destination_codes})