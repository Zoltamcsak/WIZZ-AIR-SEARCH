import {Flight} from '../../select-flight/flight';
import {SelectFlightActionTypes} from './select-flight.actions';

export class SelectFlightState {
  originFlights: Flight[];
  returnFlights: Flight[];
}

export const initState: SelectFlightState = {
  originFlights: [],
  returnFlights: []
};

export function reducer(state = initState, action): SelectFlightState {
  switch (action.type) {
    case SelectFlightActionTypes.GET_FLIGHT_SUCCESS: {
      return {
        ...state,
        originFlights: action.payload
      };
    }
    case SelectFlightActionTypes.GET_RETURN_FLIGHT_SUCCESS: {
      return {
        ...state,
        returnFlights: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
