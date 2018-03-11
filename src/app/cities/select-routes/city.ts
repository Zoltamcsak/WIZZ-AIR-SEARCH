/**
 * Models the /asset/stations request from the back end
 */

export interface City {
  iata: string;
  latitude: number;
  longitude: number;
  shortName: string;
  connections: Connection[];
}

export interface Connection {
  iata: string;
  operationStartDate: string;
  rescueEndDate: string;
}
