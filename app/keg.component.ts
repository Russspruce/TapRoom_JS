import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    template:`
    <div>
      <h3
      [class.expensive]="keg.price >= 5"
      [class.strong]="keg.abv >= 8">
        {{ keg.name }} - {{ keg.brewery }}, {{ keg.abv }}\% :  \${{ keg.price }} <br>Pints left: {{ keg.level }}
      </h3>
      <button type="submit" (click)="pourPints(4)" *ngIf="keg.level >= 4">Pour a pitcher</button>
      <button type="submit" (click)="pourPints(1)" *ngIf="keg.level >= 1">Pour a pint</button>
    </div>
    `
})

export class KegComponent {
  public keg: Keg;
  pourPints(pints: number) {
    this.keg.level -= pints;
  }
}
