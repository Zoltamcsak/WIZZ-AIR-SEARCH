import {Flight} from '../../select-flight/flight';
import {SelectFlightActionTypes} from './select-flight.actions';

export class SelectFlightState {
  flights: Flight[];
}

export const initState: SelectFlightState = {
  flights: []
};

export function reducer(state = initState, action): SelectFlightState {
  switch (action.type) {
    case SelectFlightActionTypes.GET_FLIGHT_SUCCESS: {
      return {
        flights: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
