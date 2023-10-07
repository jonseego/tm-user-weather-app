import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomUserCardComponent } from './random-user-card/random-user-card.component';
import { SavedUsersComponent } from './saved-users/saved-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: RandomUserCardComponent },
  { path: 'users', component: SavedUsersComponent },
  { path: '**', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
