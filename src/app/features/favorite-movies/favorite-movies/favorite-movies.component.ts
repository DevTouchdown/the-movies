import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/shared/models/movie';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {
  movies: Array<Movie>;
  favoriteMovies: Array<Movie>;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies(): void {
    this.favoriteMovies = JSON.parse(this.storageService.getFromLocal('favoriteMovies'));
    if (this.favoriteMovies === undefined || this.favoriteMovies === null) {
      this.favoriteMovies = [];
    }
  }

  searchMovies(event: string): void {
    if (event === undefined || event === '') {
      this.loadFavoriteMovies();
    } else if (this.favoriteMovies && this.favoriteMovies.length > 0) {
      const favoriteMoviesSearchResult: Array<Movie> = [];
      this.favoriteMovies.forEach((favoriteMovie: Movie) => {
        if (favoriteMovie.Title.toLocaleLowerCase().indexOf(event.toLocaleLowerCase()) !== -1) {
          favoriteMoviesSearchResult.push(favoriteMovie);
        }
      });
      this.favoriteMovies = favoriteMoviesSearchResult;
    }
  }

  changeFavoriteMovieStatus(favoriteMovie: Movie): void {
    const found = this.favoriteMovies.findIndex(movie => movie.imdbID === favoriteMovie.imdbID);

    if (found > -1) {
      this.favoriteMovies[found].Favorite = !this.favoriteMovies[found].Favorite;
    }

    if (found === undefined || found > -1) {
      this.favoriteMovies.splice(found, 1);
    }

    this.storageService.addToLocal('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }
}
