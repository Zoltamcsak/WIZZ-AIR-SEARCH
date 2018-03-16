import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Fare, Flight} from '../flight';
import {includes} from 'lodash';

@Component({
  selector: 'wizz-select-flight-details',
  template: `
    <p>Flights:</p>
    <wizz-flight-detail [origin]='origin'
                        [destination]='destination'
                        [flight]='originFlight'
                        [fare]='originFare'></wizz-flight-detail>
    <wizz-flight-detail *ngIf='returnFare && returnFlights'
                        [origin]='destination'
                        [destination]='origin'
                        [flight]='returnFlight'
                        [fare]='returnFare'></wizz-flight-detail>
    <p>Total cost: {{originFare.price + returnFare?.price}}</p>
  `
})
export class SelectFlightDetailsComponent implements OnChanges {
  @Input() origin: string;
  @Input() destination: string;
  @Input() departDate: Date;
  @Input() returnDate: Date;
  @Input() originFlights: Flight[];
  @Input() returnFlights: Flight[];
  @Input() originFare: Fare;
  @Input() returnFare: Fare;

  public originFlight: Flight;
  public returnFlight: Flight;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['originFare']) {
      this.originFlight = this.getFlightFromFare(this.originFare.fareSellKey, this.originFlights);
    }
    if (changes['returnFare']) {
      if (this.returnFare && this.returnFlights) {
        this.returnFlight = this.getFlightFromFare(this.returnFare.fareSellKey, this.returnFlights);
      }
    }
  }

  getFlightFromFare(fareKey: string, flights: Flight[] = []): Flight {
    return flights.find((flight: Flight) => {
      return !!flight.fares.find(fare => fare.fareSellKey === fareKey);
    });
  }
}
