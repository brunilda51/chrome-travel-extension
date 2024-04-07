import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import searchService from '../../../services/search.service';
import { Search } from '../../../types';
import SustainabilityEmojis from '../../../sharedComponents/SustainabilityScore';

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

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'origin_code', headerName: 'Origin Code', width: 130 },
    { field: 'destination_code', headerName: 'Destination Code', width: 160 },
    {
      field: 'sustainability_score',
      headerName: 'Sustainability Score',
      width: 200,
      renderCell: (params) => (
        <SustainabilityEmojis sustainabilityScore={params.value ? params.value : 1}></SustainabilityEmojis>
      ),
    },
  ];

  return (
    <Container maxWidth={'xl'}>
      <Typography variant="h4" gutterBottom>
        My Flights Page
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={flights} checkboxSelection={false} columns={columns} autoPageSize={true} />
      </div>
    </Container>
  );
};

export default MyFlightsComponent;
