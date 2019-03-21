import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Movie } from 'src/app/shared/models/movie';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movie: Movie;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.movieId = params.get('id');
      if (this.movieId) {
        this.loadMovieDetails(this.movieId);
      }
    });
    this.loadMovieDetails(this.movieId);
  }

  loadMovieDetails(id: string): void {
    this.movieService.getMovieById(id).subscribe(movie => {
      this.movie = movie;
    }, error => {
      console.log('Unexpected error loading movie details from database: ', error);
    });
  }

}
