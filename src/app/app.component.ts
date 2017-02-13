import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-hero";
import {HeroService} from "./hero.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroesFromServer().then(heroes=>this.heroes = heroes);
  }

  title = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  };
}



