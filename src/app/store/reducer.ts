import * as fromCities from './city';
import {ActionReducerMap} from '@ngrx/store';
import * as fromSelectFlight from './select-flight';

export class State {
  cityState: fromCities.CityState;
  flightState: fromSelectFlight.SelectFlightState;
}

export function initState(): State {
  return new State();
}

export const reducers: ActionReducerMap<State> = {
  cityState: fromCities.reducer,
  flightState: fromSelectFlight.reducer
};
