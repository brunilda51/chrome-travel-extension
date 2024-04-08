import { DestinationCodes, Search } from '../types';
import { API_URL } from './urlHelper';

const baseUrl = `${API_URL}/searches/`;

const getAllSearches = async (): Promise<Search[]> => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const getSearchById = async (id: number): Promise<Search> => {
  const response = await fetch(`/details/${baseUrl}${id}/`);
  const data = await response.json();
  return data;
};

const getLatestSearches = async (): Promise<DestinationCodes> => {
  const response = await fetch(`${baseUrl}latest_destination_codes`);
  const data = await response.json();
  return data;
};

const createSearch = async (newSearch: Search): Promise<Search> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSearch),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

const updateSearch = async (id: number, updatedSearch: Search): Promise<Search> => {
  const response = await fetch(`/details/${baseUrl}${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedSearch),
  });
  const data = await response.json();
  return data;
};

const deleteSearch = async (id: number): Promise<void> => {
  await fetch(`/details/${baseUrl}${id}/`, {
    method: 'DELETE',
  });
};

export default {
  getAllSearches,
  getLatestSearches,
  getSearchById,
  createSearch,
  updateSearch,
  deleteSearch,
};
