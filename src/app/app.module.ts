import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersApiService } from './services/users-api.service';
import { WeatherApiService } from './services/weather-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCardComponent } from './user-card/user-card.component';
import { SavedUsersComponent } from './saved-users/saved-users.component';
import { RandomUsersComponent } from './random-users/random-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    SavedUsersComponent,
    RandomUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LeafletModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    UsersApiService, 
    WeatherApiService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }