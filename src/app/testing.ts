import { of } from "rxjs";

import { WeatherApiService } from "./services/weather-api.service";
import { UsersApiService } from "./services/users-api.service";
import { User } from "./models";

export function getWeatherApiServiceMock(): Partial<WeatherApiService> {
  return {
    getWeather() {
      return of({
        "current_weather_units": {
          "temperature": "°C",
        },
        "current_weather": {
          "temperature": 1.5,
          "weathercode": 2
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