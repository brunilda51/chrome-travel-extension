import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
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

  return (
    <div className="rounded-3xl shadow-lg w-96 h-46 bg-white">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-600">{destination}</p>
      </div>

      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default App;
