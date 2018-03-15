import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../cities/select-routes/city';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducer';
import {Observable} from 'rxjs/Observable';
import {Flight} from '../flight';
import {GetFlight} from '../../store/select-flight';
import {formatDate} from '../../utils/date.utils';
import {Router} from '@angular/router';

@Component({
  selector: 'wizz-select-flight-overview',
  template: `
    {{originFlights$ | async}}
  `
})
export class SelectFlightOverviewComponent implements OnInit {
  @Input() originCity: City;
  @Input() destinationCity: City;
  @Input() departDate: Date;
  @Input() returnDate: Date;

  public originFlights$: Observable<Flight[]>;

  constructor(private store$: Store<State>,
              private router: Router) {
    this.originFlights$ = this.store$.select(state => state.flightState.flights);
  }

  ngOnInit(): void {
    if (!this.originCity || !this.destinationCity || !this.departDate) {
      this.router.navigate(['']);
      return;
    }
    const formattedDate = formatDate(this.departDate);
    this.store$.dispatch(new GetFlight({origin: this.originCity.iata, destination: this.destinationCity.iata, date: formattedDate}));
  }

}
