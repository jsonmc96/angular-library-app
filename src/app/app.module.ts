import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { UserComponent } from './user.component';

import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BooksService } from './services/books.service';
import { HomeComponent } from './home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    BooksComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
