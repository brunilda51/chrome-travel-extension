import { AQIData } from '../types';
import { AQ_URL, token } from './urlHelper';

const getAirQualityData = async (city: string): Promise<AQIData> => {
  const baseUrl = `${AQ_URL}/${city}/?token=${token}`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

export { getAirQualityData };
