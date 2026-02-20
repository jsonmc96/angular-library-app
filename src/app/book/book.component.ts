import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  // Title of the book component
  title = 'Mi Libro';

  // Input property to receive the book title from the parent component
  @Input() book: string = 'Not Found';

  // Output event emitter to notify when a book is clicked
  @Output() bookClicked = new EventEmitter();

  // Inject the BooksService to manage the book list
  constructor(private service: BooksService) {}

  // Method to handle the click event on the book component
  onClick() {
    this.service.deleteBook(this.book);
  }
}
