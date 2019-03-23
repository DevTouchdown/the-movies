import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import {
  SearchBarComponent,
  MoviesListComponent,
  MovieDetailsComponent,
  MoviesListPaginationComponent
} from './components';

@NgModule({
  declarations: [
    SearchBarComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MoviesListPaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    SearchBarComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MoviesListPaginationComponent,
    FormsModule
  ]
})
export class SharedModule { }
