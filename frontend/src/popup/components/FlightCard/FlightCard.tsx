import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const FlightCard = ({ flightData }: any) => {
  const { origin_code, destination_code, departure, arrival } = flightData;

  return (
    <Card sx={{ padding: 2, boxShadow: 4, width: 400 }}>
      <CardHeader
        title={`${origin_code} to ${destination_code}`}
        subheader={`Departure: ${departure} | Return: ${arrival}`}
        sx={{ backgroundColor: '#3f51b5', color: '#fff' }}
      />
      <CardContent>
        <Typography variant="body1" color={'#fff'}>
          {JSON.stringify(flightData)}
        </Typography>
      </CardContent>
      <CardHeader title="Search Information" sx={{ backgroundColor: '#f50057', color: '#fff' }} />
      <CardContent>
        <Typography variant="body1">Origin: {origin_code}</Typography>
        <Typography variant="body1">Destination: {destination_code}</Typography>
        {/* You can add more search information here */}
      </CardContent>
    </Card>
  );
};

export default FlightCard;
