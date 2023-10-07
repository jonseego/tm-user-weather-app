import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersApiService } from './api/users-api.service';
import { WeatherApiService } from './api/weather-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [UsersApiService, WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//111 unit tests or at least passing test for all
