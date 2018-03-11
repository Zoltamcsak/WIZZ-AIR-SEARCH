import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {City, Connection} from './city';
import {Dictionary, map} from 'lodash';

@Injectable()
export class SelectCityService {


  constructor(private httpClient: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.httpClient.get('/api/asset/stations');
  }

  getCitiesFromConnections(connections: Connection[], cities: Dictionary<City>): City[] {
    return map(connections, (connection: Connection) => {
      return cities[connection.iata];
    });
  }
}
