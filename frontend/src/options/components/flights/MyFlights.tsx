import React, { useState, useEffect } from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material'; // Import Material-UI components
import searchService from '../../../services/search.service';
import { Search } from '../../../types';

import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { EmojiNature } from '@mui/icons-material';

const MyFlightsComponent = () => {
  const [flights, setFlights] = useState<Search[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const fetchedFlights = await searchService.getAllSearches();
        setFlights(fetchedFlights);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <Container maxWidth={'sm'}>
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
              <Typography variant="body2">
                Sustainability Score:
                {new Array(flight.sustainability_score).fill(null).map((element, index) => (
                  <EmojiNature key={index} style={{ color: 'green' }} />
                ))}
              </Typography>
              <Typography variant="body2">Flight Duration: {flight.flight_duration}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MyFlightsComponent;
