import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { LowKegPipe } from './low-keg.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [LowKegPipe],
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show Low Kegs</option>
    <option value="empty">Empty</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | low:filterLevel"
  (click)="kegClicked(currentKeg)"
  [keg]="currentKeg"
  [class.selected]="currentKeg === selectedKeg">
  </keg-display>
  <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLevel: String = "all";

  constructor() {
    this.onKegSelect = new EventEmitter();
  }

  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }

  createKeg(newKeg: Keg): void {
    this.kegList.push(newKeg);
  }

  onChange(filterOption): void {
    this.filterLevel = filterOption;
  }
}
