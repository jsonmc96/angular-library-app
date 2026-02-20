import { Subject } from 'rxjs';

export class BooksService {
  // Subject to notify subscribers about changes in the book list
  bookSubject = new Subject();

  private books = [
    'El Quijote',
    'Cien Años de Soledad',
    'La Sombra del Viento',
  ];

  // Method to add a new book to the list
  addBook(book: string) {
    // Add the new book to the list
    this.books.push(book);
    // Notify subscribers that the book list has changed
    this.bookSubject.next();
  }

  // Method to delete a book from the list
  deleteBook(book: string) {
    // Remove the book from the list
    this.books = this.books.filter((b) => b !== book);
    // Notify subscribers that the book list has changed
    this.bookSubject.next();
  }

  listBooks() {
    return [...this.books];
  }
}
