import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {SelectFlightService} from '../../select-flight/select-flight.service';
import {GetFlight, GetFlightSuccess, SelectFlightActionTypes} from './select-flight.actions';
import {Flight} from '../../select-flight/flight';

@Injectable()
export class SelectFlightEffect {
  @Effect() getFlights: Observable<Action> = this.action$
    .ofType(SelectFlightActionTypes.GET_FLIGHT)
    .map((action: GetFlight) => action.payload)
    .switchMap((payload: {origin: string, destination: string, date: string}) => {
      return this.selectFlightService.searchFlight(payload.origin, payload.destination, payload.date)
        .map((result: Flight[]) => new GetFlightSuccess(result));
    });

  constructor(private action$: Actions,
              private selectFlightService: SelectFlightService) {}
}
