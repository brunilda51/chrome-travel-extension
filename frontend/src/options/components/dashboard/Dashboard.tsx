import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { CircularProgress, Container } from '@mui/material';
import searchService from '../../../services/search.service';
import { AQIData } from '../../../types';
import { getAirQualityData } from '../../../services/airquality.service';

Chart.register(...registerables);

const ComparativeAQIChart: React.FC = () => {
  const [chartDataPM25, setChartDataPM25] = useState<any>(null);
  const [chartDataPM10, setChartDataPM10] = useState<any>(null);
  const [chartDataO3, setChartDataO3] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cities = (await searchService.getLatestSearches()).destination_codes;
        const promises = cities.map((city) => getAirQualityData(city));

        const responses: AQIData[] = await Promise.all(promises);

        const dates = responses[0].data.forecast.daily.pm25.map((item) => item.day);
        const formattedDates = dates.map((dateString) => {
          const date = new Date(dateString);
          const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
          return date.toLocaleDateString('en-US', options);
        });

        const createDataSet = (pollutant: string) =>
          responses.map((response) => {
            const cityName = response.data.city.name;
            const pollutantValues = response.data.forecast.daily[pollutant].map((item) => item.avg);

            return {
              label: cityName,
              data: pollutantValues,
              backgroundColor: '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6), // Random color for each city
              borderWidth: 1,
            };
          });

        setChartDataPM25({
          labels: formattedDates,
          datasets: createDataSet('pm25'),
        });

        setChartDataPM10({
          labels: formattedDates,
          datasets: createDataSet('pm10'),
        });

        setChartDataO3({
          labels: formattedDates,
          datasets: createDataSet('o3'),
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      maxWidth="md"
      style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <h2>Comparative Air Quality Analysis</h2>
          <h3>PM2.5</h3>
          {chartDataPM25 && (
            <Bar
              data={chartDataPM25}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'PM2.5 AQI',
                    },
                  },
                  x: {
                    title: {
                      display: true,
                      text: 'Date',
                    },
                  },
                },
              }}
            />
          )}

          <h3>PM10</h3>
          {chartDataPM10 && (
            <Bar
              data={chartDataPM10}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'PM10 AQI',
                    },
                  },
                  x: {
                    title: {
                      display: true,
                      text: 'Date',
                    },
                  },
                },
              }}
            />
          )}

          <h3>Ozone (O3)</h3>
          {chartDataO3 && (
            <Bar
              data={chartDataO3}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Ozone (O3) AQI',
                    },
                  },
                  x: {
                    title: {
                      display: true,
                      text: 'Date',
                    },
                  },
                },
              }}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default ComparativeAQIChart;
