import searchService from '../services/search.service';
import { Search } from '../types';

const createSearchInBackground = async (data: Search) => {
  try {
    const createdSearch = await searchService.createSearch({
      destination_code: data.destination_code,
      origin_code: data.origin_code,
      departure: data.departure,
      arrival: data.arrival,
    });

    await chrome.storage.local.set({
      searchData: createdSearch,
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
