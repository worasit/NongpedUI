import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
