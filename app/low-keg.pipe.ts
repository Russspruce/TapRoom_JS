import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "low",
  pure: false
})

export class LowKegPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredLowKegState = args[0];
    if(desiredLowKegState === "low") {
      return input.filter((keg) => {
        return (keg.level <= 10 && keg.level > 0);
      });
    } else if(desiredLowKegState === "empty") {
      return input.filter((keg) => {
        return (keg.level <= 0);
      });
    }
    else {
      return input.filter((keg) => {
        return (keg.level > 0);
      });
    }
  }
}
