import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {City, Connection} from './city';
import {Dictionary} from 'lodash';

@Injectable()
export class SelectCityService {
  public baseUrl = '/api';

  constructor(private httpClient: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/asset/stations`);
  }

  /**
   * It return cities object based on connections. It filters out those connections that have no iata
   * @param {Connection[]} connections
   * @param {<City>} cities
   * @returns {City[]}
   */
  getCitiesFromConnections(connections: Connection[], cities: Dictionary<City>): City[] {
    return connections.filter(connection => cities[connection.iata]).map((connection: Connection) => {
      return cities[connection.iata];
    });
  }
}
