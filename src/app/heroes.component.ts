import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {


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



