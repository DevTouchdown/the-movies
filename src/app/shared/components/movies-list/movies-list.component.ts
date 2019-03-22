import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/shared/models/movie';
import { AuthService } from 'src/app/core/services/auth.service';

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
  isUserAuth: boolean;

  constructor(
    private authService: AuthService) { }

  ngOnInit() {
    this.isUserAuth = this.authService.isUserAuth;
  }

  changeFavoriteStatus(movie: Movie): void {
    this.favoriteMovieEmitter.emit(movie);
  }

  getFavoriteMoviesFromStorage(): void {
    this.favoriteMovies = this.storageService.getFromLocal('favoriteMovies');
  }
}
