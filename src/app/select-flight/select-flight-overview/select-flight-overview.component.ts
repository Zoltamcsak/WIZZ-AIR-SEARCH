import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../cities/select-routes/city';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducer';
import {Observable} from 'rxjs/Observable';
import {Fare, Flight} from '../flight';
import {GetFlight, GetReturnFlight} from '../../store/select-flight';
import {formatDate, getNextDay} from '../../utils/date.utils';
import {Router} from '@angular/router';
import 'rxjs/add/operator/skip';

@Component({
  selector: 'wizz-select-flight-overview',
  template: `
    <div>
      {{originCity?.shortName}} => {{destinationCity?.shortName}}
    </div>
    <ng-container *ngFor='let flight of originFlights$ | async'>
      <wizz-flight-categories [flight]='flight'
                              [selectedFare]='selectedFare'
                              (selectFare)='selectedFare = $event'></wizz-flight-categories>
    </ng-container>
    <ng-container *ngIf='returnDate; else missingReturnDate'>
      <div>
        {{destinationCity?.shortName}} => {{originCity?.shortName}}
      </div>
      <ng-container *ngFor='let flight of returnFlights$ | async'>
        <wizz-flight-categories [flight]='flight'
                                [selectedFare]='selectedReturnFare'
                                (selectFare)='selectedReturnFare = $event'></wizz-flight-categories>
      </ng-container>
    </ng-container>
    <ng-template #missingReturnDate>
      <wizz-date-picker [placeholder]='"Select return date"'
                        [minDate]='minReturnDate'
                        (dateChange)='onReturnDateChanged($event)'></wizz-date-picker>
    </ng-template>
  `
})
export class SelectFlightOverviewComponent implements OnInit {
  @Input() originCity: City;
  @Input() destinationCity: City;
  @Input() departDate: Date;
  @Input() returnDate: Date;

  public originFlights$: Observable<Flight[]>;
  public returnFlights$: Observable<Flight[]>;
  public minReturnDate: Date;
  public selectedFare: Fare;
  public selectedReturnFare: Fare;

  constructor(private store$: Store<State>,
              private router: Router) {
    this.originFlights$ = this.store$.select(state => state.flightState.originFlights);
    this.returnFlights$ = this.store$.select(state => state.flightState.returnFlights);
  }

  ngOnInit(): void {
    if (this.isDataAvailable(this.originCity, this.destinationCity, this.departDate)) {
      this.dispatchFlightInfo(this.originCity, this.destinationCity, this.departDate);
      this.handleReturnFlight(this.destinationCity, this.originCity, this.returnDate);
    } else {
      this.router.navigate(['']);
    }
  }

  dispatchFlightInfo(origin: City, destination: City, departDate: Date): void {
    const formattedDate = formatDate(departDate);
    this.store$.dispatch(new GetFlight({origin: origin.iata, destination: destination.iata, date: formattedDate}));
  }

  dispatchReturnFlightInfo(origin: City, destination: City, returnDate: Date): void {
    const formattedDate = formatDate(returnDate);
    this.store$.dispatch(new GetReturnFlight({origin: origin.iata, destination: destination.iata, date: formattedDate}));
  }

  isDataAvailable(origin: City, destination: City, departDate: Date): boolean {
    return !!(origin && destination && departDate);
  }

  handleReturnFlight(origin: City, destination: City, date: Date): void {
    if (date) {
      this.dispatchReturnFlightInfo(origin, destination, date);
    } else {
      this.minReturnDate = getNextDay(this.departDate);
    }
  }

  onReturnDateChanged(date: Date): void {
    this.returnDate = date;
    const returnDate = formatDate(date);
    this.store$.dispatch(new GetReturnFlight({origin: this.destinationCity.iata, destination: this.originCity.iata, date: returnDate}));
  }
}
