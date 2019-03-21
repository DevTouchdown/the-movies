import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details/movie-details.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    MoviesListComponent,
    MovieDetailsComponent
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
    FormsModule
  ]
})
export class SharedModule { }
