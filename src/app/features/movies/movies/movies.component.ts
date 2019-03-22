import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/shared/models/movie';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Pagination } from 'src/app/shared/models/pagination';
import { AuthService } from 'src/app/core/services/auth.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie: string;
  movies: Array<Movie>;
  favoriteMovies: Array<Movie>;
  pagination: Pagination;
  isUserAuth: boolean;

  constructor(
    private authService: AuthService,
    private movieService: MoviesService,
    private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.setUserAuth();
    this.setDefaultMovieSearch();
    this.initPagination();
    this.loadMovies();
    this.loadFavoriteMovies();
  }

  loadMovies(): void {
    this.movieService.getMoviesByTitle(`*${this.movie}*`, this.pagination.currentPage).subscribe(movies => {
      if (movies.Search && movies.Search.length > 0) {
        this.movies = movies.Search;
        this.pagination.totalItems = parseInt(movies.totalResults, 10);
        this.pagination.lastPage = Math.ceil(parseFloat(movies.totalResults) / 10);
        this.mapFavoriteMoviesToMovieSearchResults();
      } else {
        this.movies = [];
        this.initPagination();
      }
    }, error => {
      console.log('Unexpected error searching movies in database: ', error);
    });
  }

  searchMovies(movie: string): void {
    this.pagination.currentPage = 1;
    this.movie = movie;
    this.loadMovies();
  }

  loadFavoriteMovies(): void {
    this.favoriteMovies = this.favoriteService.getFavorites();
  }

  changeFavoriteMovieStatus(favoriteMovie: Movie): void {
    const indexOfFavoriteMovieInSearchedMovies = this.movies.findIndex(movie => movie.imdbID === favoriteMovie.imdbID);
    if (indexOfFavoriteMovieInSearchedMovies > -1) {
      this.movies[indexOfFavoriteMovieInSearchedMovies].Favorite = !this.movies[indexOfFavoriteMovieInSearchedMovies].Favorite;
    }

    const indexOfFavoriteMovieInFavoriteMoviesCollection = this.favoriteMovies.findIndex(movie => movie.imdbID === favoriteMovie.imdbID);
    if (indexOfFavoriteMovieInFavoriteMoviesCollection === undefined || indexOfFavoriteMovieInFavoriteMoviesCollection > -1) {
      this.favoriteService.removeFavorite(indexOfFavoriteMovieInFavoriteMoviesCollection);
    } else {
      this.favoriteService.addFavorite(favoriteMovie);
    }
  }

  initPagination(): void {
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
    this.loadFavoriteMovies();
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

  setUserAuth(): void {
    this.isUserAuth = this.authService.isUserAuth;
  }

  setDefaultMovieSearch(): void {
    this.movie = 'terminator';
  }
}
