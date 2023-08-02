import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSingleComponent } from './book-single.component';

describe('BookSingleComponent', () => {
  let component: BookSingleComponent;
  let fixture: ComponentFixture<BookSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookSingleComponent]
    });
    fixture = TestBed.createComponent(BookSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
