import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { EmojiNature } from '@mui/icons-material';
import SustainabilityEmojis from '../../../sharedComponents/SustainabilityScore';

const FlightCard = ({ flightData }: any) => {
  const { origin_code, destination_code, departure_date, arrival_date, sustainability_score } = flightData.searchData;
  const departure = new Date(departure_date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const arrival = new Date(arrival_date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const redirectToOptionsPage = () => {
    chrome.runtime.openOptionsPage(); // Redirect to the options page
  };
  return (
    <Card sx={{ padding: 2, boxShadow: 4, width: 300 }}>
      <CardHeader
        title={`Last search saved: ${origin_code} to ${destination_code}`}
        subheader={<span style={{ color: '#fff' }}>{`Departure: ${departure} | Return: ${arrival}`}</span>}
        sx={{ backgroundColor: '#3f51b5', color: '#fff' }}
      />
      <CardContent>
        <Typography variant="body1" color={'#000'} width={200}>
          The sustainability score for this trip is{' '}
          <SustainabilityEmojis sustainabilityScore={sustainability_score}></SustainabilityEmojis>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={redirectToOptionsPage}>Go to my profile</Button>
      </CardActions>
    </Card>
  );
};

export default FlightCard;
