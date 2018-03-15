import { Flight } from './flight';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SelectFlightService {
  public baseUrl = '/api';

  constructor(private httpClient: HttpClient) {}

  searchFlight(origin: string, destination: string, date: string): Observable<Flight[]> {
    const url = `${this.baseUrl}/search?departureStation=${origin}&arrivalStation=${destination}&date=${date}`;
    return this.httpClient.get<Flight[]>(url);
  }
}
