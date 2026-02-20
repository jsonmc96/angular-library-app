import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Bienvenido al Curso de Angular</h1>`,
  // templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'],
})

// HomeComponent is a simple component that displays the home page of the application
export class HomeComponent {
  // Title of the home component
  title = 'Home';
}
