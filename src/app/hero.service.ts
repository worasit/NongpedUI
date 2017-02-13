import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-hero";

@Injectable()
export class HeroService {

  public getHeroes(): Hero[] {
    return HEROES;
  }

  public getHeroesFromServer(): Promise<Hero[]> {
    return new Promise((resolve)=> {
      setTimeout(()=>resolve(this.getHeroes()), 2000);
    })
  }
}

