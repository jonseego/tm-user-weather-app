import { Component } from '@angular/core';

import { UsersApiService } from './services/users-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.usersApiService.getRandomUser();

  constructor(private usersApiService: UsersApiService) {}
}
