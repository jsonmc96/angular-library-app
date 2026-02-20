import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})

export class BooksComponent {
  title = 'Mis Libros';

  books = ['Algebra Lineal', 'Matematica Discreta', 'Estructura de Datos'];

  deleteBook(book: string) {
    this.books = this.books.filter((b) => b !== book);
  }

  addBook(bookForm: any) {
    if (bookForm.invalid) return;
    this.books.push(bookForm.value.title);
    bookForm.reset();
  }
}
