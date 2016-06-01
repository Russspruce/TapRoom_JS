import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Tap List</h1>
    <keg-list [kegList] = "kegs">
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("IPA", "HUB", 4.50, 7.1),
      new Keg("Saison", "Commons", 4.50, 9),
      new Keg("Porter", "Basecamp", 7, 5.8)
    ];
  }
}
