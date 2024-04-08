import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import searchService from '../../../services/search.service';
import { Search } from '../../../types';
import SustainabilityEmojis from '../../../sharedComponents/SustainabilityScore';

const MyFlightsComponent: React.FC = () => {
  const [flights, setFlights] = useState<Search[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const fetchedFlights = await searchService.getAllSearches();
        console.log(fetchedFlights);
        setFlights(fetchedFlights);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  const columns: GridColDef[] = [
    { field: 'origin_code', headerName: 'Origin Code', width: 130 },
    { field: 'destination_code', headerName: 'Destination Code', width: 160 },
    {
      field: 'arrival_date',
      headerName: 'Arrival Date',
      width: 200,
      valueGetter: (params) => formatDate(params as string),
    },
    {
      field: 'departure_date',
      headerName: 'Departure Date',
      width: 200,
      valueGetter: (params) => formatDate(params as string),
    },
    {
      field: 'timestamp_added',
      headerName: 'Date Searched',
      width: 200,
      valueGetter: (params) => formatDate(params as string),
    },
    {
      field: 'sustainability_score',
      headerName: 'Sustainability Score',
      width: 200,
      renderCell: (params: any) => (
        <SustainabilityEmojis sustainabilityScore={params.value ? params.value : 1}></SustainabilityEmojis>
      ),
    },
  ];

  return (
    <Container
      maxWidth="xl"
      style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2>My flights</h2>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid rows={flights} checkboxSelection={false} columns={columns} />
      </div>
    </Container>
  );
};

export default MyFlightsComponent;
