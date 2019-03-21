import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../../environments/environment';
import { Movie } from 'src/app/shared/models/movie';
import { MovieSearch } from 'src/app/shared/models/movie-search';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMoviesByTitle(title: string, page: number | string): Observable<MovieSearch> {
    return this.http.get<any>(`${environment.omdbApiUrl}s=${title}&page=${page}`);
  }

  getMovieById(id: number | string): Observable<Movie> {
    return this.http.get<any>(`${environment.omdbApiUrl}i=${id}`);
  }
}
