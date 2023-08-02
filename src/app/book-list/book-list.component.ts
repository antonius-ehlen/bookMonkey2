import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../services/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'aebm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = []

  constructor(
    private bss: BookStoreService
  ) {
  }

  ngOnInit() {
    this.books = this.getAllBooks()
  }

  getAllBooks(): Book[] {
    return this.bss.getAllBooks()
  }
}
