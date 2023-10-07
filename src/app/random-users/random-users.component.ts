import { Component, OnInit } from '@angular/core';
import { Subject, forkJoin, take } from 'rxjs';

import { UsersApiService } from '../services/users-api.service';
import { User } from '../models';

@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.scss']
})
export class RandomUsersComponent implements OnInit {

  users$ = new Subject<User[]>();
  
  constructor(private usersApiService: UsersApiService) {}

  ngOnInit() {
    forkJoin([
      this.usersApiService.getRandomUser(),
      this.usersApiService.getRandomUser(),
      this.usersApiService.getRandomUser(),
    ]).pipe(take(1)).subscribe((users) => {
      this.users$.next(users);
    })
  }
}
