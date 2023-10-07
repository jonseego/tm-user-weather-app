import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersApiService } from '../services/users-api.service';
import { getUsersApiServiceMock } from '../testing';

import { RandomUsersComponent } from './random-users.component';

describe('RandomUsersComponent', () => {
  let component: RandomUsersComponent;
  let fixture: ComponentFixture<RandomUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomUsersComponent],
      providers: [
        { provide: UsersApiService, useValue: getUsersApiServiceMock() },
      ]
    });
    fixture = TestBed.createComponent(RandomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
