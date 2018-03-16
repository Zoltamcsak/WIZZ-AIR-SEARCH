import {Action} from '@ngrx/store';
import {Flight} from '../../select-flight/flight';

export enum SelectFlightActionTypes {
  GET_FLIGHT = '[Flight] Get flight',
  GET_FLIGHT_SUCCESS = '[Flight] Get flight success',
  GET_RETURN_FLIGHT = '[Flight] Get return flight',
  GET_RETURN_FLIGHT_SUCCESS = '[Flight] Get return flight success'
}

export class GetFlight implements Action {
  readonly type = SelectFlightActionTypes.GET_FLIGHT;

  constructor(public payload: {origin: string, destination: string, date: string}) {}
}

export class GetFlightSuccess implements Action {
  readonly type = SelectFlightActionTypes.GET_FLIGHT_SUCCESS;

  constructor(public payload: Flight[]) {}
}

export class GetReturnFlight implements Action {
  readonly type = SelectFlightActionTypes.GET_RETURN_FLIGHT;

  constructor(public payload: {origin: string, destination: string, date: string}) {}
}

export class GetReturnFlightSuccess implements Action {
  readonly type = SelectFlightActionTypes.GET_RETURN_FLIGHT_SUCCESS;

  constructor(public payload: Flight[]) {}
}

export type FlightActions = GetFlight |
  GetFlightSuccess |
  GetReturnFlight |
  GetReturnFlightSuccess;
