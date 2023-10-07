import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, take, takeUntil, timer } from 'rxjs';

import { User, WeatherResponse } from '../models';

import { WeatherApiService } from '../services/weather-api.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) user: User;
  @Input({ required: true }) canSave: boolean;

  weather$ = new Subject<WeatherResponse>();
  weatherIconSrc: string;

  private updateIntervalMs = 5 * 60 * 1000; // 5 mins
  private destroy$ = new Subject<void>();

  constructor(private weatherApiService: WeatherApiService, private storageService: StorageService) {}

  ngOnInit() {
    timer(0, this.updateIntervalMs).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.weatherApiService.getWeather(this.user.location.coordinates).pipe(take(1)).subscribe((weather) => {
        this.weather$.next(weather);
        this.weatherIconSrc = this.mapWeatherCodeToImageSource(weather.current_weather.weathercode);
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  saveUserInfo() {
    this.storageService.addUser(this.user);
  }

  private mapWeatherCodeToImageSource(code: number): string {
    // source for weather codes: https://open-meteo.com/en/docs 
    // source for icons: https://www.iconfinder.com/weather-icons?price=free
    if (code === 0) {
      return 'assets/img/clear.svg';
    }
    if (code === 1) {
      return 'assets/img/mainly_clear.svg';
    }
    if (code === 2) {
      return 'assets/img/partly_cloudy.svg';
    }
    if (code === 3) {
      return 'assets/img/overcast.svg';
    }
    if ([45,48].includes(code)) {
      return 'assets/img/foggy.svg';
    }
    if ([51,53,55,56,57].includes(code)) {
      return 'assets/img/drizzle.svg';
    }
    if ([61,63,65,66,67,80,81,82].includes(code)) {
      return 'assets/img/rain.svg';
    }
    if ([71].includes(code)) {
      return 'assets/img/snow_light.svg';
    }
    if ([73,75,77,85,86].includes(code)) {
      return 'assets/img/snow_heavy.svg';
    }
    if (code === 95) {
      return 'assets/img/thunderstorm.svg';
    }
    if ([96,99].includes(code)) {
      return 'assets/img/hail.svg';
    }
    return 'assets/img/question.svg';
  }

}
