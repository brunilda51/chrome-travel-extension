import React, { useEffect, useState } from 'react';
import FlightCard from './FlightCard/FlightCard';
const App = () => {
  const [flightData, setFlightData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve, reject) => {
          chrome.storage.local.get(['searchData'], (result) => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve(result);
            }
          });
        });
        console.log(data);
        setFlightData(data);
      } catch (error) {
        console.error('Error fetching data from chrome.storage.local:', error);
      }
    };

    fetchData();
  }, []);
  return <>{flightData && <FlightCard flightData={flightData}></FlightCard>}</>;
};

export default App;
