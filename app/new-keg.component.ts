import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
  <form name="newKegForm">
    <h3>Add Keg:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName />
    <input placeholder="Brewery" class="col-sm-8 input-lg" #newBrewery />
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice />
    <input placeholder="ABV" class="col-sm-8 input-lg" #newABV />
    <button (click)="addKeg(newName, newBrewery, newPrice, newABV)" class="btn-success btn-lg">Submit</button>
  </form>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrewery: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement){
    var keg = new Keg(newName.value, newBrewery.value, parseInt(newPrice.value), parseInt(newABV.value));

    this.onSubmitNewKeg.emit(keg);
    newName.value= "";
    newBrewery.value= "";
    newPrice.value= "";
    newABV.value= "";
    //clear forms
  }
}
