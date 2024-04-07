import searchService from '../services/search.service';
import { Search } from '../types';

const createSearchInBackground = async (data: Search) => {
  try {
    const searchData = {
      destination_code: data.origin_code,
      origin_code: data.destination_code,
      departure: data.departure,
      arrival: data.arrival,
    };

    const createdSearch = await searchService.createSearch(searchData);
    console.log(createdSearch);
    await chrome.storage.local.set({
      searchData: searchData,
    });
    return createdSearch;
  } catch (error) {
    console.error('Error creating search:', error);
  }
};

chrome.runtime.onMessage.addListener(async (message, _sender, _sendResponse) => {
  if (message.action === 'sendLocalStorage') {
    await createSearchInBackground(message.data);
  }
});
