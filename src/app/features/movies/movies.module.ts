import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }
