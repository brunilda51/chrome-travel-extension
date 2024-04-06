import React, { useEffect, useState } from 'react';
import FlightCard from './FlightCard/FlightCard';

const App = () => {
  const [flightData, setFlightData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve data from chrome.storage.local
        const data = await new Promise((resolve, reject) => {
          chrome.storage.local.get(['destination', 'origin', 'departDate', 'returnDate', 'travelers'], (result) => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve(result);
            }
          });
        });
        setFlightData(data);
      } catch (error) {
        console.error('Error fetching data from chrome.storage.local:', error);
      }
    };

    fetchData(); // Call the fetchData function inside useEffect
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return <>{flightData && <FlightCard flightData={flightData}></FlightCard>}</>;
};

export default App;
