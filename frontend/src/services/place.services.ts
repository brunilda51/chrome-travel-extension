import { Place } from '../types';

const baseUrl = '/api/places/';

const getAllPlaces = async (): Promise<Place[]> => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const getPlaceById = async (id: number): Promise<Place> => {
  const response = await fetch(`${baseUrl}${id}/`);
  const data = await response.json();
  return data;
};

const createPlace = async (newPlace: Place): Promise<Place> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPlace),
  });
  const data = await response.json();
  return data;
};

const updatePlace = async (id: number, updatedPlace: Place): Promise<Place> => {
  const response = await fetch(`${baseUrl}${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPlace),
  });
  const data = await response.json();
  return data;
};

const deletePlace = async (id: number): Promise<void> => {
  await fetch(`${baseUrl}${id}/`, {
    method: 'DELETE',
  });
};

export default {
  getAllPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
};
