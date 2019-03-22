import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from 'src/app/shared/components/movie-details/movie-details.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
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
export class MoviesRoutingModule { }
