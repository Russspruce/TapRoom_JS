export class Keg {
  public level: number = 124; //amount of pints in keg
  constructor(public name: string, public type: string, public brewery: string, public price: number, public abv: number, public ibu: number) {}
}
