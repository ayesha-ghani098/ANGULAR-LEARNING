import { Injectable } from '@angular/core';

// for asynchronous operations
import { Observable, of } from 'rxjs';

// Importing hero interface
import { Hero } from './components/heroes/hero';

// Importing heroes mock data
import { HEROES } from './data/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  // Synchronous calling
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;

    return of(hero);
  }
}
