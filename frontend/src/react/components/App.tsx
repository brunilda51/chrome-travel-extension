import React, { useEffect, useState } from 'react';

const App = () => {
  const [destination, setDestination] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve data from chrome.storage.local
        const data = await new Promise((resolve, reject) => {
          chrome.storage.local.get('destination', (result) => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve(result.destination);
            }
          });
        });

        // Check if data is not empty before setting the state
        if (data !== undefined && data !== null) {
          setDestination(data);
        }
      } catch (error) {
        console.error('Error fetching data from chrome.storage.local:', error);
      }
    };

    fetchData(); // Call the fetchData function inside useEffect
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return <main>{destination && <h1>{destination}</h1>}</main>;
};

export default App;
