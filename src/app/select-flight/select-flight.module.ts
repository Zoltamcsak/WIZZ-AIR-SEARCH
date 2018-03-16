import { SelectFlightService } from './select-flight.service';
import { NgModule } from '@angular/core';
import { SelectFlightContainerComponent } from './select-flight-container';
import {SelectFlightOverviewComponent} from './select-flight-overview/select-flight-overview.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlightCategoriesComponent} from './flight-categories/flight-categories.component';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material';
import {CitiesModule} from '../cities/cities.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MatCardModule,
    CitiesModule
  ],
  declarations: [
    SelectFlightContainerComponent,
    SelectFlightOverviewComponent,
    FlightCategoriesComponent
  ],
  providers: [
    SelectFlightService
  ]
})
export class SelectFlightModule {}
