import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListPaginationComponent } from './movies-list-pagination.component';

describe('MoviesListPaginationComponent', () => {
  let component: MoviesListPaginationComponent;
  let fixture: ComponentFixture<MoviesListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
