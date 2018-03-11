import {City} from '../../select-city/city';
import { Dictionary } from 'lodash';
import {CityActions, CityActionTypes} from './city.actions';
import * as _ from 'lodash';


export class CityState {
  cities: Dictionary<City> | {};
}

export const initState: CityState = {
  cities: {}
};

export function reducer(state = initState, action: CityActions) {
  switch (action.type) {
    case CityActionTypes.GET_ALL_CITIES_SUCCESS: {
      const newEntities = _.mapKeys(action.payload, (entity: City) => entity.iata);
      return {
        cities: newEntities
      };
    }
    default:
      return state;
  }
}
