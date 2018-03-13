import { Dictionary } from 'lodash';
import {CityActions, CityActionTypes} from './city.actions';
import * as _ from 'lodash';
import {City} from '../../cities/select-routes/city';


export class CityState {
  cities: Dictionary<City> | null;
  origin: City;
  destination: City;
  departureDate: Date;
  returnDate: Date;
}

export const initState: CityState = {
  cities: null,
  origin: null,
  destination: null,
  departureDate: null,
  returnDate: null
};

export function reducer(state = initState, action: CityActions): CityState {
  switch (action.type) {
    case CityActionTypes.GET_ALL_CITIES_SUCCESS: {
      const newEntities = _.mapKeys(action.payload, (entity: City) => entity.iata);
      return {
        ...state,
        cities: newEntities
      };
    }
    case CityActionTypes.ADD_ORIGIN: {
      return {
        ...state,
        origin: action.payload,
        destination: null
      };
    }
    case CityActionTypes.ADD_DESTINATION: {
      return {
        ...state,
        destination: action.payload
      };
    }

    case CityActionTypes.ADD_DEPART_DATE: {
      return {
        ...state,
        departureDate: action.payload,
        returnDate: null
      };
    }

    case CityActionTypes.ADD_RETURN_DATE: {
      return {
        ...state,
        returnDate: action.payload
      };
    }
    default:
      return state;
  }
}
