import React, { useState, useEffect } from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material'; // Import Material-UI components
import searchService from '../../../services/search.service';
import { Search } from '../../../types';
const MyFlightsComponent = () => {
  const [flights, setFlights] = useState<Search[]>([]);

  useEffect(() => {
    // Call the existing service function to fetch flight information
    const fetchFlights = async () => {
      try {
        const fetchedFlights = await searchService.getAllSearches(); // Assuming getSearchesService returns an array of flight objects
        setFlights(fetchedFlights); // Update flights state with fetched data
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Flights Page
      </Typography>
      <div>
        {flights.map((flight) => (
          <Card key={flight.id} style={{ marginBottom: '10px' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {flight.origin_code} to {flight.destination_code}
              </Typography>
              <Typography variant="body2">Sustainability Score: {flight.sustainability_score}</Typography>
              <Typography variant="body2">Flight Duration: {flight.flight_duration}</Typography>
              {/* You can add more flight information here */}
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MyFlightsComponent;
