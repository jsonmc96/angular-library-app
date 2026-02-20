import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  title = 'Mi Libro';

  @Input() book: string = 'Not Found';

  @Output() bookClicked = new EventEmitter();

  onClick() {
    // alert('Has hecho click en el libro: ' + this.book);
    // this.bookClicked.emit(this.book);
    this.bookClicked.emit();
  }
}
