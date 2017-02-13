import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>' +
  '<heroes></heroes>'
})

export class AppComponent {
  title: string = 'Tour of Heroes';
}
