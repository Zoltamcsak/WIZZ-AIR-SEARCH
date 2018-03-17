import { Flight } from './flight';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BaseHttpService} from '../service/base-http.service';

@Injectable()
export class SelectFlightService extends BaseHttpService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  searchFlight(origin: string, destination: string, date: string): Observable<Flight[]> {
    const url = `${this.baseUrl}/search?departureStation=${origin}&arrivalStation=${destination}&date=${date}`;
    return this.httpGet<Flight[]>(url);
  }
}
