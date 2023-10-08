import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Subject, map, switchMap, take, takeUntil, timer } from 'rxjs';
import { latLng, tileLayer, MapOptions, Layer, marker, icon } from 'leaflet';

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

  weather$ = new BehaviorSubject<WeatherResponse | undefined>(undefined);
  weatherIconSrc: string;
  mapOptions: MapOptions;
  userMarker: Layer;
  hourRowInfo$ = new BehaviorSubject<WeatherResponse['hourly'] | undefined>(undefined);
  hrStartIndex = 0;
  numHourDisplays: number;

  private updateIntervalMs = 5 * 60 * 1000; // 5 mins
  private destroy$ = new Subject<void>();

  constructor(
    private weatherApiService: WeatherApiService, 
    private storageService: StorageService,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.setMapOptions();
    this.setNumHoursDisplay();
    if (this.canSave) {
      this.startWeatherPolling();
    } else {
      this.setWeatherFromStorage()
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  saveCardDetails() {
    this.storageService.addUser(this.user);
    this.storageService.addWeatherForUser(this.weather$.value as WeatherResponse, this.user);
  }

  getPrevHoursTemperatures() {
    this.hrStartIndex = this.hrStartIndex - this.numHourDisplays;
    this.setHourInfo(this.weather$.value as WeatherResponse);
  }

  getNextHoursTemperatures() {
    this.hrStartIndex = this.hrStartIndex + this.numHourDisplays;
    this.setHourInfo(this.weather$.value as WeatherResponse);
  }

  private startWeatherPolling() {
    timer(0, this.updateIntervalMs).pipe(
      switchMap(() => this.weatherApiService.getWeather(this.user.location.coordinates)),
      takeUntil(this.destroy$)
    ).subscribe((weather) => {
      this.setWeatherInfo(weather);
    });
  }

  private setWeatherFromStorage() {
    const map = this.storageService.getUserWeatherMap();
    const weather = map[this.storageService.getUserKey(this.user)];
    this.setWeatherInfo(weather);
  }

  private setWeatherInfo(weather: WeatherResponse) {
    this.weather$.next(weather);
    this.weatherIconSrc = this.mapWeatherCodeToImageSource(weather.current_weather.weathercode);
    this.setHourInfo(weather);
  }

  private setHourInfo(weather: WeatherResponse) {
    this.hourRowInfo$.next({
      temperature_2m: weather.hourly.temperature_2m.slice(this.hrStartIndex, this.hrStartIndex + this.numHourDisplays),
      time: weather.hourly.time.slice(this.hrStartIndex, this.hrStartIndex + this.numHourDisplays),
    });
  }

  private setMapOptions() {
    let lat = parseFloat(this.user.location.coordinates.latitude);
    let lng = parseFloat(this.user.location.coordinates.longitude);
    this.mapOptions = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      ],
      zoom: 5,
      center: latLng(lat, lng)
    };
    this.userMarker = marker([ lat, lng ], {
       icon: icon({
        iconUrl: this.user.picture.large,
        iconSize: [30, 30],
       })
    });
  }

  private setNumHoursDisplay() {
    const isMobile$ = this.breakpointObserver.observe([`(max-width: 400px)`]).pipe(map(({ matches }) => matches));
    isMobile$.pipe(take(1)).subscribe((isMobile) => {
      this.numHourDisplays = isMobile ? 3 : 4;
    });
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
