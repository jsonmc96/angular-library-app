import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, UserComponent, BookComponent, BooksComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
