import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output()
  searchEmitter = new EventEmitter<string>();
  searchTerm = '';

  constructor() { }

  ngOnInit() { }

  search(): void {
    this.searchTerm = this.searchTerm.trim();
    this.searchEmitter.emit(this.searchTerm);
  }
}
