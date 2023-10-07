import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
// import { ChangeDetectionStrategy } from '@angular/compiler';//111

import { User, WeatherResponse } from '../models';

import { WeatherApiService } from '../api/weather-api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,//111 causing compile error
})
export class UserCardComponent implements OnInit {
  @Input({ required: true }) user: User;

  weather$ = new Subject<WeatherResponse>();
  weatherIconSrc: string;

  constructor(private weatherApiService: WeatherApiService) {}

  ngOnInit() {
    this.weatherApiService.getWeather(this.user.location.coordinates).pipe(take(1)).subscribe((weather) => {
      this.weather$.next(weather);
      this.weatherIconSrc = this.mapWeatherCodeToImageSource(weather.current_weather.weathercode);
    });
  }

  private mapWeatherCodeToImageSource(code: number): string {
    //111 switch to svg for better scaling display
    // source for weather codes: https://open-meteo.com/en/docs 
    // source for icons: https://www.iconfinder.com/
    if (code === 0) {
      return 'assets/img/sunny.png';
    }
    if ([1,2,3].includes(code)) {
      return 'assets/img/partly_cloudy.png';
    }
    if ([45,48].includes(code)) {
      return 'assets/img/foggy.png';
    }
    if ([51,53,55,56,57].includes(code)) {
      return 'assets/img/drizzle.png';
    }
    if ([61,63,65,66,67,80,81,82].includes(code)) {
      return 'assets/img/rain.png';
    }
    if ([71,73,75,77,85,86].includes(code)) {
      return 'assets/img/snowy.png';
    }
    if (code === 95) {
      return 'assets/img/thunderstorm.png';
    }
    if ([96,99].includes(code)) {
      return 'assets/img/hail.png';
    }
    return 'assets/img/sunny.png';
  }
}
