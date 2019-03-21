import { Movie } from './movie';

export interface MovieSearch {
    Response: string;
    Search: Array<Movie>;
    totalResults?: string;
    Error?: string;
}
