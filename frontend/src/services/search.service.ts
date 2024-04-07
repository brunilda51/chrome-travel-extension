import { Search } from '../types';

const baseUrl = 'http://localhost:8000/searches/';

const getAllSearches = async (): Promise<Search[]> => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const getSearchById = async (id: number): Promise<Search> => {
  const response = await fetch(`${baseUrl}${id}/`);
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
  const response = await fetch(`${baseUrl}${id}/`, {
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
  await fetch(`${baseUrl}${id}/`, {
    method: 'DELETE',
  });
};

export default {
  getAllSearches,
  getSearchById,
  createSearch,
  updateSearch,
  deleteSearch,
};
