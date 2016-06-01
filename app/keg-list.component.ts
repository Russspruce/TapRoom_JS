import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent, NewKegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList" [keg]="currentKeg">
  </keg-display>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];

  createKeg(newKeg: Keg): void {
    this.kegList.push(newKeg);
  }
}
