import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { ApiLocation, WeatherResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getWeather(coordinates: ApiLocation['coordinates']): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`
      https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}`
      +`&longitude=${coordinates.longitude}`
      +`&forecast_days=1`
      +`&current_weather=true`
      +`&daily=temperature_2m_max,temperature_2m_min`
      +`&hourly=temperature_2m`
      +`&timezone=GMT`);
  }
}
