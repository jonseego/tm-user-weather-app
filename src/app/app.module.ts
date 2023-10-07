import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersApiService } from './services/users-api.service';
import { WeatherApiService } from './services/weather-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCardComponent } from './user-card/user-card.component';
import { RandomUserCardComponent } from './random-user-card/random-user-card.component';
import { SavedUsersComponent } from './saved-users/saved-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    RandomUserCardComponent,
    SavedUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [UsersApiService, WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//111 unit tests or at least passing test for all
