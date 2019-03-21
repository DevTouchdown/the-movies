import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/shared/models/movie';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Pagination } from 'src/app/shared/models/pagination';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Array<Movie>;
  favoriteMovies: Array<Movie>;
  pagination: Pagination;
  movie = 'terminator';
  isUserAuth: boolean;

  constructor(
    private authService: AuthService,
    private movieService: MoviesService,
    private storageService: StorageService) { }

  ngOnInit() {
    this.isUserAuth = this.authService.isUserAuth;
    this.setPagination();
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMoviesByTitle(`*${this.movie}*`, this.pagination.currentPage).subscribe(movies => {
      if (movies && movies.Search.length > 0) {
        this.movies = movies.Search;
        this.pagination.totalItems = parseInt(movies.totalResults, 10);
        this.pagination.lastPage = Math.ceil(parseFloat(movies.totalResults) / 10);
        this.mapFavoriteMoviesToMovieSearchResults();
      }
    }, error => {
      console.log('Unexpected error searching movies in database: ', error);
    });
  }

  searchMovies(movie: string): void {
    this.pagination.currentPage = 1;
    this.movie = (movie === '' || movie === undefined) ? 'terminator' : movie;
    this.loadMovies();
  }

  getFavoriteMoviesFromStorage(): void {
    this.favoriteMovies = JSON.parse(this.storageService.getFromLocal('favoriteMovies'));
    if (this.favoriteMovies === undefined || this.favoriteMovies === null) {
      this.favoriteMovies = [];
    }
  }

  changeFavoriteMovieStatus(favoriteMovie: Movie): void {
    const indexOfFavoriteMovieInSearchedMovies = this.movies.findIndex(movie => movie.imdbID === favoriteMovie.imdbID);
    if (indexOfFavoriteMovieInSearchedMovies > -1) {
      this.movies[indexOfFavoriteMovieInSearchedMovies].Favorite = !this.movies[indexOfFavoriteMovieInSearchedMovies].Favorite;
    }

    const indexOfFavoriteMovieInFavoriteMoviesCollection = this.favoriteMovies.findIndex(movie => movie.imdbID === favoriteMovie.imdbID);
    if (indexOfFavoriteMovieInFavoriteMoviesCollection === undefined || indexOfFavoriteMovieInFavoriteMoviesCollection > -1) {
      this.favoriteMovies.splice(indexOfFavoriteMovieInFavoriteMoviesCollection, 1);
    } else {
      this.favoriteMovies.push(favoriteMovie);
    }
    this.storageService.addToLocal('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }

  setPagination(): void {
    this.pagination = {
      totalItems: 1,
      startingPage: 1,
      lastPage: 1,
      currentPage: 1
    };
  }

  changePage(event: number): void {
    if (event) {
      this.pagination.currentPage = event;
      this.loadMovies();
    }
  }

  mapFavoriteMoviesToMovieSearchResults(): void {
    this.getFavoriteMoviesFromStorage();
    if (this.favoriteMovies && this.favoriteMovies.length > 0) {
      this.movies.forEach(movie => {
        this.favoriteMovies.forEach(favoriteMovie => {
          if (movie.imdbID === favoriteMovie.imdbID) {
            movie.Favorite = favoriteMovie.Favorite;
          }
        });
      });
    }
  }
}
