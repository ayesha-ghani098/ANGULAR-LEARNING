// Importing Angular from angular core
import { Component, OnInit } from '@angular/core';

// Importing heroes interface
import { Hero } from './hero';

// Import dummy data for heroes
// import { HEROES } from '../../data/mock-heroes';

// Importing data through a service
import { HeroService } from 'src/app/hero.service';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', //  the location of the component's template file.
  styleUrls: ['./heroes.component.css'], // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  // selectedHero?: Hero;
  heroes: Hero[] = [];

  // on Select a hero
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // get heroes though a service
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();

    // in this case it will not return
    // void is a type
    // here calls or set initial data
    // it is a lifecycle hook
    // Angular calls ngOnInit() shortly after creating a component.
  }
}
