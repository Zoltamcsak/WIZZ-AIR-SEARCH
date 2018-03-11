import * as fromCities from './city';
import {ActionReducerMap} from '@ngrx/store';

export class State {
  cityState: fromCities.CityState;
}

export function initState(): State {
  return new State();
}

export const reducers: ActionReducerMap<State> = {
  cityState: fromCities.reducer
};
