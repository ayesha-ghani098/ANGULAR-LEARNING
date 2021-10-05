// Importing Component from Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Main Angular Shell is controlled by this AppComponent
export class AppComponent {
  title = 'Tour Of Heroes';
}

// Angular doesnot support functional components?
