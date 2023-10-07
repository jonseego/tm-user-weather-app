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
  postalcode: number;
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
  current_weather: {
    weathercode: number; // WMO code
    temperature: number;
  };
  current_weather_units: {
    temperature: string;// e.g. "°C"
  };
  daily: {
    temperature_2m_max: number[]; // e.g. [17.3, 15.8]
    temperature_2m_min: number[]; // e.g. [11.5, 11.4]
    time: string[]; // e.g. ["2023-10-06", "2023-10-07"] <-- starts today
  };
  daily_units: {
    temperature_2m_max: string; // e.g. "°C"
    temperature_2m_min: string; // e.g. "°C"
  };
}

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