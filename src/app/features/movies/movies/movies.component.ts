import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Array<Movie>;
  favoriteMovies: Array<Movie>;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies.Search;
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
    }, error => {
      console.log('Unexpected error loading movies from database: ', error);
    });
  }

  searchMovies(event: string): void {
    if (event !== '' || event !== undefined) {
      this.movieService.getMoviesByTitle(`*${event}*`).subscribe(movies => {
        if (movies && movies.Search.length > 0) {
          this.movies = movies.Search;
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
      }, error => {
        console.log('Unexpected error searching movies in database: ', error);
      });
    }
  }

  getFavoriteMoviesFromStorage(): void {
    this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    if (this.favoriteMovies === undefined || this.favoriteMovies === null) {
      this.favoriteMovies = [];
    }
  }

  changeFavoriteMovieStatus(favoriteMovie: Movie): void {
    const found = this.movies.findIndex(movie => movie.imdbID === favoriteMovie.imdbID);

    if (found > -1) {
      this.movies[found].Favorite = !this.movies[found].Favorite;
    }

    const refound = this.favoriteMovies.findIndex(movie => movie.imdbID === favoriteMovie.imdbID);

    if (refound === undefined || refound > -1) {
      this.favoriteMovies.splice(refound, 1);
    } else {
      this.favoriteMovies.push(favoriteMovie);
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }
}
