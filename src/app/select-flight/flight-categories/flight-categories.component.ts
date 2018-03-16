import {Component, Input} from '@angular/core';
import {Flight} from '../flight';

@Component({
  selector: 'wizz-flight-categories',
  template: `
    Flight: {{flight?.departure | date:'medium'}}
    <div class='card-container'>
      <ng-container *ngIf='flight?.remainingTickets > 0; else noTickets'>
        <ng-container *ngFor='let fare of flight?.fares'>
          <mat-card class='flight-card'>
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
}
