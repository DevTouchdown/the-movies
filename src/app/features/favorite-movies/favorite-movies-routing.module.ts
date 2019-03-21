import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteMoviesComponent,
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteMoviesRoutingModule { }
