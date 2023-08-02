import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
books: Book[] = []

  constructor() {
    this.books = [
      {
        title: 'Die kleine gelbe Ente',
        subtitle: '2 Watschelbeine',
        isbn: '987654321-123',
        authors: ['E.Erpel','D.Duck'],
        picture: ''
    },
    {
      title: 'Die grüne Frosch',
      subtitle: 'quack quack',
      isbn: '987654321-567',
      authors: ['E.Quarck','D.Quack'],
      picture: ''
  },

    ]
   }

   getAllBooks(): Book[] {
    return this.books
   }

   getSingelBook(isbn: string): Book | undefined {
    return this.books.find( book => book.isbn = isbn)
   }
}
