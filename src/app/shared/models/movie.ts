import { Rating } from './rating';

export interface Movie {
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Ratings?: Array<Rating>;
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
    Response?: string;
    Favorite?: boolean;
}
