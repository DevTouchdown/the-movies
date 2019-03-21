import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pagination } from '../../models/pagination';

@Component({
  selector: 'app-movies-list-pagination',
  templateUrl: './movies-list-pagination.component.html',
  styleUrls: ['./movies-list-pagination.component.scss']
})
export class MoviesListPaginationComponent implements OnInit {
  @Input()
  pagination: Pagination;
  @Output()
  changePageEmitter = new EventEmitter<string|number>();

  constructor() { }

  ngOnInit() { }

  changePage(direction: string): void {
    switch (direction) {
      case 'previous':
        this.pagination.currentPage -= 1;
        break;
      case 'next':
        this.pagination.currentPage += 1;
        break;
    }
    this.changePageEmitter.emit(this.pagination.currentPage);
  }
}
