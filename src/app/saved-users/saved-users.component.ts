import { Component, OnInit } from '@angular/core';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss']
})
export class SavedUsersComponent {

  users = this.storageService.getUsers();

  constructor(private storageService: StorageService) {}
}
