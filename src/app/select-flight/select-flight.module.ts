import { SelectFlightService } from './select-flight.service';
import { NgModule } from '@angular/core';
import { SelectFlightContainerComponent } from './select-flight-container';
import {SelectFlightOverviewComponent} from './select-flight-overview/select-flight-overview.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SelectFlightContainerComponent,
    SelectFlightOverviewComponent
  ],
  providers: [
    SelectFlightService
  ]
})
export class SelectFlightModule {}
