import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';

import { UsersApiService } from './api/users-api.service';
import { WeatherApiService } from './api/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private usersApiService: UsersApiService, private weatherApiService: WeatherApiService) {}

  ngOnInit() {
    this.usersApiService.getRandomUser().pipe(
      tap((user) => {
        console.log('user: ', user);//111
      }),
      exhaustMap((user) => this.weatherApiService.getWeather(user.location.coordinates)),
      take(1)
    ).subscribe((weather) => {
      console.log('weather: ', weather);//111
    });
  }
}
