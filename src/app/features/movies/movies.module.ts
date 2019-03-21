import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    MoviesComponent,
    DetailsComponent
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
