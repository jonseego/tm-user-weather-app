import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WeatherApiService } from "../services/weather-api.service";
import { UsersApiService } from "../services/users-api.service";

import { UserCardComponent } from './user-card.component';
import { getUsersApiServiceMock, getWeatherApiServiceMock, mockUser } from '../testing';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [BrowserAnimationsModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule],
      providers: [
        { provide: WeatherApiService, useValue: getWeatherApiServiceMock() },
        { provide: UsersApiService, useValue: getUsersApiServiceMock() },
      ]
    });
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
