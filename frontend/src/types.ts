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
  sustainability_score: number;
  destination_code: string;
  origin_code: string;
  flight_duration: string;
}

export interface User {
  id?: number;
  email: string;
  googleid: string;
  last_name: string;
  name: string;
  password: string;
  username: string;
}
