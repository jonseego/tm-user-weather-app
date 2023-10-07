import { Injectable } from '@angular/core';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly key = "tm-user-weather-app";

  constructor() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
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

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  private setUsers(users: User[]) {
    localStorage.setItem(this.key, JSON.stringify(users));
  }

  private getUserKey(user: User): string {
    return user.email;
  }
}
