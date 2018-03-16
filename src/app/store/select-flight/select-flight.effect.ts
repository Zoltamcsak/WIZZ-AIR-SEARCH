import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {SelectFlightService} from '../../select-flight/select-flight.service';
import {GetFlight, GetFlightSuccess, GetReturnFlightSuccess, SelectFlightActionTypes} from './select-flight.actions';
import {Flight} from '../../select-flight/flight';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class SelectFlightEffect {
  @Effect() getFlights: Observable<Action> = this.action$
    .ofType(SelectFlightActionTypes.GET_FLIGHT)
    .map((action: GetFlight) => action.payload)
    .flatMap((payload: {origin: string, destination: string, date: string}) => {
      return this.selectFlightService.searchFlight(payload.origin, payload.destination, payload.date)
        .map((result: Flight[]) => new GetFlightSuccess(result));
    });

  @Effect() getReturnFlights: Observable<Action> = this.action$
    .ofType(SelectFlightActionTypes.GET_RETURN_FLIGHT)
    .map((action: GetFlight) => action.payload)
    .flatMap((payload: {origin: string, destination: string, date: string}) => {
      return this.selectFlightService.searchFlight(payload.origin, payload.destination, payload.date)
        .map((result: Flight[]) => new GetReturnFlightSuccess(result));
    });

  constructor(private action$: Actions,
              private selectFlightService: SelectFlightService) {}
}
