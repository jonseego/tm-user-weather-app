import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersApiService } from './api/users-api.service';
import { WeatherApiService } from './api/weather-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UsersApiService, WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//111 unit tests or at least passing test for all
