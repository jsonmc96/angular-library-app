import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  title = 'Mis Libros';

  books = [] as string[];

  constructor(private service: BooksService) {}

  private bookSubscription: Subscription;

  addBook(bookForm: any) {
    if (bookForm.invalid) return;
    this.service.addBook(bookForm.value.title);
    bookForm.reset();
  }

  ngOnInit() {
    this.books = this.service.listBooks();
    this.bookSubscription = this.service.bookSubject.subscribe(() => {
      this.books = this.service.listBooks();
    });
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
}
