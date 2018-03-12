import { City } from './../cities/select-routes/city';
import { Observable } from 'rxjs/Observable';
import { Component } from "@angular/core";



@Component({
  selector: 'wizz-select-flight-container',
  template: `
    
  `
})
export class SelectFlightContainer {
  public originCity$: Observable<City>;
  public destinationCity$: Observable<City>;
  public departDate$: Observable<Date>;
  public returnDate$: Observable<Date>;

  constructor() {
  }
}
