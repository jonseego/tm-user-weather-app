import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { User, UserResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<User> {
    return this.http.get<UserResponse>('https://randomuser.me/api/').pipe(
      map((response) => response.results[0])
    );
  }
}
