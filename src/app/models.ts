export interface UserResponse {
  results: User[];
}

export interface User {
  gender: 'male' | 'female';
  name: ApiName;
  email: string;
  picture: ApiPicture
  location: ApiLocation;
}

export interface ApiLocation {
  city: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  country: string;
  postcode: number;
  state: string;
  street: {
    number: number;
    name: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  current_weather: {
    weathercode: number; // WMO code
    temperature: number;
    time: string; // e.g. 2023-10-08T01:15
  };
  current_weather_units: {
    temperature: string;// e.g. "°C"
  };
  daily: {
    temperature_2m_max: number[]; // e.g. [17.3]
    temperature_2m_min: number[]; // e.g. [11.5]
  };
  daily_units: {
    temperature_2m_max: string; // e.g. "°C"
    temperature_2m_min: string; // e.g. "°C"
  };
  hourly: {
    temperature_2m: number[]; // e.g. [17.3, 17.4, ...] (from hr 0 to hr 23)
    time: string[]; // e.g. ["2023-10-08T00:00", "2023-10-08T01:00", ...]
  };
  hourly_units: {
    temperature_2m: string; // e.g. "°C"
  };
}

export type UserWeatherMap = { [key: string]: WeatherResponse };

interface ApiName {
  title: string;
  first: string;
  last: string;
}

interface ApiPicture {
  large: string;
  medium: string;
  thumbnail: string;
}