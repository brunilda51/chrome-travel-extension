import searchService from '../services/search.service'; // Assuming the path to searchService.ts is correct

// Example function to create a search in the background
const createSearchInBackground = async (data: any) => {
  try {
    const dummySearchData = {
      sustainability_score: 0.9,
      destination_code: data.destinationMultiAirports[0].code,
      origin_code: data.originMultiAirports[0].code,
      flight_duration: '3 hours',
    };

    // Call the createSearch function
    const createdSearch = await searchService.createSearch(dummySearchData);

    console.log('Search created:', createdSearch);
  } catch (error) {
    console.error('Error creating search:', error);
  }
};

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === 'sendLocalStorage') {
    const data = JSON.parse(message.data.BKHISTORY2).flights;
    const { destinationLocation, origin_location, depart_date, return_date, travelers, destination_code, origin_code } =
      data;

    await chrome.storage.local.set({
      destination: destinationLocation,
      origin: origin_location,
      departDate: depart_date,
      returnDate: return_date,
      travelers: travelers,
    });
    createSearchInBackground(data);
  }
});
