import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1 class="Tap_Title">Tap List</h1>
    <keg-list [kegList] = "kegs">
    </keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Gear Up", "IPA", "HUB", 4.50, 6.2, 76),
      new Keg("Hazelnut Brown Nectar", "Brown Ale", "Rogue", 5.5, 5.6, 33),
      new Keg("S'more Stout", "Stout", "Base Camp", 6, 7.7, 70)
    ];
  }
}
