import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../../environments/environment';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  getFavorites(): Observable<Movie[]> {
    return this.http.get<any[]>(environment.omdbApiUrl);
  }

  addFavorite(): Observable<Movie[]> {
    return this.http.get<any[]>(environment.omdbApiUrl);
  }

  removeFavorite(): Observable<Movie[]> {
    return this.http.get<any[]>(environment.omdbApiUrl);
  }
}
