import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const FlightCard = ({ flightData }: any) => {
  const { origin, destination, departDate, returnDate, travelers } = flightData;
  console.log(origin, flightData);
  return (
    <Card sx={{ padding: 10, boxShadow: 4, width: 400 }}>
      <CardHeader
        title={`${origin} to ${destination}`}
        subheader={`Departure: ${departDate} | Return: ${returnDate}`}
        sx={{ backgroundColor: '#3f51b5', color: '#fff' }}
      />
      <CardContent>
        <Typography variant="body1" color={'#fff'}>
          Travelers: {travelers}
        </Typography>
        {/* You can add more flight details here */}
      </CardContent>
      <CardHeader title="Search Information" sx={{ backgroundColor: '#f50057', color: '#fff' }} />
      <CardContent>
        <Typography variant="body1">Origin: {origin}</Typography>
        <Typography variant="body1">Destination: {destination}</Typography>
        {/* You can add more search information here */}
      </CardContent>
    </Card>
  );
};

export default FlightCard;
