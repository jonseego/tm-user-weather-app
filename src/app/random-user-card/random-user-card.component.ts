import { Component } from '@angular/core';

import { UsersApiService } from '../api/users-api.service';

@Component({
  selector: 'app-random-user-card',
  templateUrl: './random-user-card.component.html',
  styleUrls: ['./random-user-card.component.scss']
})
export class RandomUserCardComponent {
  user$ = this.usersApiService.getRandomUser();

  constructor(private usersApiService: UsersApiService) {}
}
