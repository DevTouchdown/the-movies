import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListPaginationComponent } from './components/movies-list-pagination/movies-list-pagination.component';

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
