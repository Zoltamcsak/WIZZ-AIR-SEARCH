import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SelectCityService {


  constructor(private httpClient: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.httpClient.get('/api/asset/stations');
  }
}
