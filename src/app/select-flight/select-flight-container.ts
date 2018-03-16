import { City } from './../cities/select-routes/city';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {Fare, Flight} from './flight';



@Component({
  selector: 'wizz-select-flight-container',
  template: `
    Select a flight
    <div class='flight-container'>
      <wizz-select-flight-overview [originCity]='originCity$ | async'
                                   [destinationCity]='destinationCity$ | async'
                                   [departDate]='departDate$ | async'
                                   [returnDate]='returnDate$ | async'
                                   (selectOriginFare)='originFare = $event'
                                   (selectReturnFare)='returnFare = $event'></wizz-select-flight-overview>
      <wizz-select-flight-details *ngIf='originFare'
                                  [origin]='(originCity$ | async)?.shortName'
                                  [destination]='(destinationCity$ | async)?.shortName'
                                  [departDate]='departDate$ | async'
                                  [returnDate]='returnDate$ | async'
                                  [originFlights]='originFlights$ | async'
                                  [returnFlights]='returnFlights$ | async'
                                  [originFare]='originFare'
                                  [returnFare]='returnFare'></wizz-select-flight-details>
    </div>
  `,
  styleUrls: ['select-flight-container.scss']
})
export class SelectFlightContainerComponent {
  public originCity$: Observable<City>;
  public destinationCity$: Observable<City>;
  public departDate$: Observable<Date>;
  public returnDate$: Observable<Date>;
  public originFlights$: Observable<Flight[]>;
  public returnFlights$: Observable<Flight[]>;

  public originFare: Fare;
  public returnFare: Fare;

  constructor(private store$: Store<State>) {
    this.originCity$ = this.store$.select(state => state.cityState.origin);
    this.destinationCity$ = this.store$.select(state => state.cityState.destination);
    this.departDate$ = this.store$.select(state => state.cityState.departureDate);
    this.returnDate$ = this.store$.select(state => state.cityState.returnDate);
    this.originFlights$ = this.store$.select(state => state.flightState.originFlights);
    this.returnFlights$ = this.store$.select(state => state.flightState.returnFlights);
  }
}
