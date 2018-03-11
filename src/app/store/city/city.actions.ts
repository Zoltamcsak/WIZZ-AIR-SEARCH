import {Action} from '@ngrx/store';
import {City} from '../../select-city/city';

export enum CityActionTypes {
  GET_ALL_CITIES = '[Cities] Get all cities',
  GET_ALL_CITIES_SUCCESS = '[Cities] Get all cities success'
}

export class GetAllCities implements Action {
  readonly type = CityActionTypes.GET_ALL_CITIES;
}

export class GetAllCitiesSuccess implements Action {
  readonly type = CityActionTypes.GET_ALL_CITIES_SUCCESS;

  constructor(public payload: City[] | null) {}
}

export type CityActions = GetAllCities |
  GetAllCitiesSuccess;
