import { of } from "rxjs";

import { WeatherApiService } from "./services/weather-api.service";
import { UsersApiService } from "./services/users-api.service";
import { User } from "./models";

export function getWeatherApiServiceMock(): Partial<WeatherApiService> {
  return {
    getWeather() {
      return of({
        "latitude": -12.125,
        "longitude": 94.625,
        "current_weather_units": {
          "temperature": "°C",
        },
        "current_weather": {
          "temperature": 1.5,
          "weathercode": 2,
          "time": "2023-10-08T03:15",
        },
        "daily_units": {
          "temperature_2m_max": "°C",
          "temperature_2m_min": "°C"
        },
        "daily": {
          "time": [
            "2023-10-07",
          ],
          "temperature_2m_max": [
            2.7,
          ],
          "temperature_2m_min": [
            1.4,
          ]
        },
        "hourly": {
          "time": [
            "2023-10-08T00:00",
            "2023-10-08T01:00",
            "2023-10-08T02:00",
            "2023-10-08T03:00",
            "2023-10-08T04:00",
            "2023-10-08T05:00",
            "2023-10-08T06:00",
            "2023-10-08T07:00",
            "2023-10-08T08:00",
            "2023-10-08T09:00",
            "2023-10-08T10:00",
            "2023-10-08T11:00",
            "2023-10-08T12:00",
            "2023-10-08T13:00",
            "2023-10-08T14:00",
            "2023-10-08T15:00",
            "2023-10-08T16:00",
            "2023-10-08T17:00",
            "2023-10-08T18:00",
            "2023-10-08T19:00",
            "2023-10-08T20:00",
            "2023-10-08T21:00",
            "2023-10-08T22:00",
            "2023-10-08T23:00"
          ],
          "temperature_2m": [
            25.3,
            25.2,
            25.6,
            25.6,
            25.1,
            25.3,
            25.8,
            25.8,
            25.8,
            25.6,
            25.8,
            26,
            26.1,
            26.4,
            26,
            25.8,
            25.8,
            25.8,
            25.7,
            25.6,
            25.6,
            25.5,
            25.5,
            25.5
          ]
        },
        "hourly_units": {
          "temperature_2m": "°C"
        }
      })
    },
  }
}

export function getUsersApiServiceMock(): Partial<UsersApiService> {
  return {
    getRandomUser() {
      return of(mockUser);
    },
  }
}

export const mockUser: User = {
  "gender": "female",
  "name": {
    "title": "Ms",
    "first": "Gunhild",
    "last": "Hense"
  },
  "location": {
    "street": {
      "number": 8430,
      "name": "Ahornweg"
    },
    "city": "Dömitz",
    "state": "Nordrhein-Westfalen",
    "country": "Germany",
    "postcode": 99374,
    "coordinates": {
      "latitude": "-50.8464",
      "longitude": "6.5860"
    },
    "timezone": {
      "offset": "+3:00",
      "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
    }
  },
  "email": "gunhild.hense@example.com",
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/46.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
  },
};