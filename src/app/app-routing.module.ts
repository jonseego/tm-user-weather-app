import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomUserCardComponent } from './random-user-card/random-user-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: RandomUserCardComponent },
  { path: '**', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
