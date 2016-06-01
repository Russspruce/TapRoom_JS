import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegComponent],
  template: `
    <h1>Tap List</h1>
    <keg-display [keg]="keg">
    </keg-display>
  `
})

export class AppComponent {
  public keg: Keg;
  constructor() {
    this.keg = new Keg("IPA", "HUB", 4.50, 7.1);
  }

}
