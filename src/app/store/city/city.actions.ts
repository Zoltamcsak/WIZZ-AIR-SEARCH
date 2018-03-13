import {Action} from '@ngrx/store';
import {City} from '../../cities/select-routes/city';

export enum CityActionTypes {
  GET_ALL_CITIES = '[Cities] Get all cities',
  GET_ALL_CITIES_SUCCESS = '[Cities] Get all cities success',
  ADD_ORIGIN = '[Cities] Add origin',
  ADD_DESTINATION = '[Cities] Add destination',
  ADD_ORIGIN_BY_SHORTNAME = '[Cities] Add origin by shortname',
  ADD_DESTINATION_BY_SHORTNAME = '[Cities] Add destination by shortname',
  ADD_DEPART_DATE = '[Cities] Add depart date',
  ADD_RETURN_DATE = '[Cities] Add return date'
}

export class GetAllCities implements Action {
  readonly type = CityActionTypes.GET_ALL_CITIES;
}

export class GetAllCitiesSuccess implements Action {
  readonly type = CityActionTypes.GET_ALL_CITIES_SUCCESS;

  constructor(public payload: City[] | null) {}
}

export class AddOrigin implements Action {
  readonly type = CityActionTypes.ADD_ORIGIN;

  constructor(public payload: City | null) {}
}

export class AddDestination implements Action {
  readonly type = CityActionTypes.ADD_DESTINATION;

  constructor(public payload: City | null) {}
}

export class AddOriginByShortName implements Action {
  readonly type = CityActionTypes.ADD_ORIGIN_BY_SHORTNAME;

  constructor(public payload: string) {}
}

export class AddDestinationByShortName implements Action {
  readonly type = CityActionTypes.ADD_DESTINATION_BY_SHORTNAME;

  constructor(public payload: string) {}
}

export class AddDepartDate implements Action {
  readonly type = CityActionTypes.ADD_DEPART_DATE;

  constructor(public payload: Date | null) {}
}

export class AddReturnDate implements Action {
  readonly type = CityActionTypes.ADD_RETURN_DATE;

  constructor(public payload: Date | null) {}
}

export type CityActions = GetAllCities |
  GetAllCitiesSuccess |
  AddOrigin |
  AddDestination |
  AddDepartDate |
  AddReturnDate |
  AddDestinationByShortName |
  AddOriginByShortName;
