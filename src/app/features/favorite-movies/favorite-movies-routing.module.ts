import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { MovieDetailsComponent } from 'src/app/shared/components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteMoviesComponent
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteMoviesRoutingModule { }
