import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Fare, Flight} from '../flight';

@Component({
  selector: 'wizz-flight-categories',
  template: `
    Flight: {{flight?.departure | date:'medium'}}
    <div class='card-container'>
      <ng-container *ngIf='flight?.remainingTickets > 0; else noTickets'>
        <ng-container *ngFor='let fare of flight?.fares'>
          <mat-card class='flight-card'
                    [class.selected]='fare.fareSellKey == selectedFare?.fareSellKey'
                    (click)='selectFare.emit(fare)'>
            <span>{{fare.bundle}}</span>
            <span>{{fare.price}}</span>
          </mat-card>
        </ng-container>
      </ng-container>
      <ng-template #noTickets>There are no tickets available</ng-template>
    </div>
  `,
  styleUrls: ['flight-categories.scss']
})
export class FlightCategoriesComponent {
  @Input() public flight: Flight;
  @Input() public selectedFare: Fare;
  @Output() public selectFare: EventEmitter<Fare> = new EventEmitter<Fare>();
}
