import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  weather$: Observable<WeatherResponse>;

  constructor(private weatherApiService: WeatherApiService) {}

  ngOnInit() {
    this.weather$ = this.weatherApiService.getWeather(this.user.location.coordinates);
  }
}
