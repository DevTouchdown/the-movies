import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from 'src/app/core/services/auth.service';
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

  isUserLoggedIn: Observable<boolean>;
  favoriteMovies: string | Array<Movie>;
  isUserAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
  }

  changeFavoriteStatus(movie: Movie): void {
    this.favoriteMovieEmitter.emit(movie);
  }
}
