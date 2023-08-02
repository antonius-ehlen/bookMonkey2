import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'aebm-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.css']
})
export class BookSingleComponent {
 @Input () book?: Book


}
