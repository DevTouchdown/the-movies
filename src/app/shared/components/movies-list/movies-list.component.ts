import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input()
  movies: Array<Movie>;
  @Output()
  favoriteMovieEmitter = new EventEmitter<Movie>();

  favoriteMovies: string | Array<Movie>;

  constructor() { }

  ngOnInit() {}

  changeFavoriteStatus(movie: Movie): void {
    this.favoriteMovieEmitter.emit(movie);
  }

  getFavoriteMoviesFromStorage(): void {
    this.favoriteMovies = localStorage.getItem('favoriteMovies');
  }

  // changePage(direction: string) {

  // }
}
