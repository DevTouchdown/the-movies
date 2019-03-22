import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Movie } from 'src/app/shared/models/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMoviesByTitle(title: string, page: number | string): Observable<any> {
    return this.http.get<any>(`${environment.omdbApiUrl}s=${title}&page=${page}&type=movie`);
  }

  getMovieById(id: number | string): Observable<Movie> {
    return this.http.get<any>(`${environment.omdbApiUrl}i=${id}`);
  }
}
