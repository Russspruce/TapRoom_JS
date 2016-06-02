import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3 class="edit">Edit Description: </h3>
    <div class="container">
      <input [(ngModel)]="keg.name" class="col-sm-4 col-sm-offset-4 input-lg keg-form"/>
      <input [(ngModel)]="keg.type" class="col-sm-4 col-sm-offset-4 input-lg keg-form"/>
      <input [(ngModel)]="keg.brewery" class="col-sm-4 col-sm-offset-4 input-lg keg-form"/>
      <input [(ngModel)]="keg.price" class="col-sm-4 col-sm-offset-4 input-lg keg-form"/>
      <input [(ngModel)]="keg.abv" class="col-sm-4 col-sm-offset-4 input-lg keg-form"/>
      <input [(ngModel)]="keg.ibu" class="col-sm-4 col-sm-offset-4 input-lg keg-form"/>
    </div><br>
  </div>
  `
})
export class EditKegComponent {
  public keg: Keg;
}
