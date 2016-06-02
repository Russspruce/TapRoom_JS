import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
  <div class="newKegForm">
  <form name="newKegForm">
    <h3>Add Keg:</h3>
    <div class="container">
    <input placeholder="Name" class="col-sm-4 col-sm-offset-4 input-lg" #newName />
    <input placeholder="Type" class="col-sm-4 col-sm-offset-4 input-lg" #newType />
    <input placeholder="Brewery" class="col-sm-4 col-sm-offset-4 input-lg" #newBrewery />
    <input placeholder="Price" class="col-sm-4 col-sm-offset-4 input-lg" #newPrice />
    <input placeholder="ABV" class="col-sm-4 col-sm-offset-4 input-lg" #newABV />
    <input placeholder="IBU" class="col-sm-4 col-sm-offset-4 input-lg" #newIBU />
    </div>
    <button (click)="addKeg(newName, newType, newBrewery, newPrice, newABV, newIBU)" class="btn-success btn-lg">Submit</button>
  </form>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newType: HTMLInputElement, newBrewery: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement, newIBU: HTMLInputElement){
    var keg = new Keg(newName.value, newType.value, newBrewery.value, parseInt(newPrice.value), parseInt(newABV.value), parseInt(newIBU.value));

    this.onSubmitNewKeg.emit(keg);
    newName.value= "";
    newType.value= "";
    newBrewery.value= "";
    newPrice.value= "";
    newABV.value= "";
    newIBU.value= "";
    //clear forms
  }
}
