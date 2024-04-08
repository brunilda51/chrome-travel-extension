// types.ts

export interface Place {
  id?: number;
  city_name: string;
  country_name: string;
  code: string;
  description: string;
}

export interface Search {
  id?: number;
  sustainability_score?: number;
  destination_code: string;
  origin_code: string;
  departure: string;
  arrival: string;
}

export interface User {
  id?: number;
  email: string;
  last_name: string;
  name: string;
  password: string;
  username: string;
}

export interface Window {
  hasRun?: boolean;
}

export interface FlightData {
  website: Website;
  origin_code: string;
  destination_code: string;
  departure: string;
  arrival: string;
}

export enum Website {
  SKYSCANNER = 'skyscanner',
  KAYAK = 'kayak',
}
