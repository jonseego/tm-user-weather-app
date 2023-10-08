import { Injectable } from '@angular/core';

import { User, UserWeatherMap, WeatherResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly usersKey = "tm-user-weather-app-users";
  private readonly weatherMapKey = "tm-user-weather-app-weather-map";

  constructor() {
    if (!localStorage.getItem(this.usersKey)) {
      localStorage.setItem(this.usersKey, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.weatherMapKey)) {
      localStorage.setItem(this.weatherMapKey, JSON.stringify({}));
    }
  }

  addUser(user: User) {
    const users = this.getUsers();
    const userKey = this.getUserKey(user);
    const userIndex = users.findIndex((u) => this.getUserKey(u) === userKey);
    if (userIndex >= 0) {
      users[userIndex] = user;
    } else {
      users.push(user);
    }
    this.setUsers(users);
  }

  addWeatherForUser(weather: WeatherResponse, user: User) {
    const userWeatherMap = this.getUserWeatherMap();
    userWeatherMap[this.getUserKey(user)] = weather;
    this.setUserWeatherMap(userWeatherMap);
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  getUserWeatherMap(): UserWeatherMap {
    return JSON.parse(localStorage.getItem(this.weatherMapKey) || '{}');
  }

  getUserKey(user: User): string {
    return user.email;
  }

  private setUsers(users: User[]) {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  private setUserWeatherMap(map: UserWeatherMap) {
    localStorage.setItem(this.weatherMapKey, JSON.stringify(map));
  }
}
