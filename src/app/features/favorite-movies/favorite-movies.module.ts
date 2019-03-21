import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoriteMoviesRoutingModule } from './favorite-movies-routing.module';

@NgModule({
  declarations: [FavoriteMoviesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FavoriteMoviesRoutingModule
  ],
  exports: [FavoriteMoviesComponent]
})
export class FavoriteMoviesModule { }
