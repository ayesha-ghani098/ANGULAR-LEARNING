// Importing Angular from angular core
import { Component, OnInit } from '@angular/core';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', //  the location of the component's template file.
  styleUrls: ['./heroes.component.css'], // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  constructor() {}
  ngOnInit(): void {
    // in this case it will not return
    // void is a type
    // here calls or set initial data
    // it is a lifecycle hook
    // Angular calls ngOnInit() shortly after creating a component.
  }
}
