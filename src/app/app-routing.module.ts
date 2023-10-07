import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SavedUsersComponent } from './saved-users/saved-users.component';
import { RandomUsersComponent } from './random-users/random-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'users/random', pathMatch: 'full' },
  { path: 'users/random', component: RandomUsersComponent },
  { path: 'users/saved', component: SavedUsersComponent },
  { path: '**', redirectTo: 'users/random', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
