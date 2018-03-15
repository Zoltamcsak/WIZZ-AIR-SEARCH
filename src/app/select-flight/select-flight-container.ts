import { City } from './../cities/select-routes/city';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';



@Component({
  selector: 'wizz-select-flight-container',
  template: `
    Select a flight
    <wizz-select-flight-overview [originCity]='originCity$ | async'
                                 [destinationCity]='destinationCity$ | async'
                                 [departDate]='departDate$ | async'
                                 [returnDate]='returnDate$ | async'></wizz-select-flight-overview>
  `
})
export class SelectFlightContainerComponent {
  public originCity$: Observable<City>;
  public destinationCity$: Observable<City>;
  public departDate$: Observable<Date>;
  public returnDate$: Observable<Date>;

  constructor(private store$: Store<State>) {
    this.originCity$ = this.store$.select(state => state.cityState.origin);
    this.destinationCity$ = this.store$.select(state => state.cityState.destination);
    this.departDate$ = this.store$.select(state => state.cityState.departureDate);
    this.returnDate$ = this.store$.select(state => state.cityState.returnDate);
  }
}
