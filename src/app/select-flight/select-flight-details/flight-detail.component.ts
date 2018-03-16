import {Component, Input} from '@angular/core';
import {Fare, Flight} from '../flight';

@Component({
  selector: 'wizz-flight-detail',
  template: `
    <div>
      {{origin}} => {{destination}}
      at {{flight.departure | date:'medium'}}
      type {{fare.bundle}} price: {{fare.price}}
    </div>
  `
})
export class FlightDetailComponent {
  @Input() public origin: string;
  @Input() public destination: string;
  @Input() public flight: Flight;
  @Input() public fare: Fare;
}
