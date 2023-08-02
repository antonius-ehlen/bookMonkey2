import { Component, Input } from '@angular/core';


import { Book } from '../shared/book';
import { BookSingleComponent } from '../book-single/book-single.component';
import { BookStoreService } from '../services/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'aebm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  book?: Book

  constructor(
    private bss: BookStoreService,
    private route: ActivatedRoute
  ) {}


}
