import { Injectable } from '@angular/core';

import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  getFavorites(): Array<Movie> {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    return (favoriteMovies !== undefined && favoriteMovies !== null) ? favoriteMovies : [];
  }

  addFavorite(movie: Movie) {
    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    if (favoriteMovies) {
      favoriteMovies.push(movie);
    } else {
      favoriteMovies = [movie];
    }
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }

  removeFavorite(index: number): void {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    favoriteMovies.splice(index, 1);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }
}
