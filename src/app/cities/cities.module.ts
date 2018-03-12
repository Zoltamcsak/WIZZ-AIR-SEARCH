import {NgModule} from '@angular/core';
import {CitiesComponent} from './cities.component';
import {MatAutocompleteModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SelectRoutesComponent} from './select-routes/select-routes.component';
import {SelectCityService} from './select-routes/select-city.service';
import {SelectCityComponent} from './select-city/select-city.component';
import {FlightDateSelectionComponent} from './date-selection/flight-date-selection.component';
import {DatePickerComponent} from './date-selection/date-picker/date-picker.component';
import {FlightPickerComponent} from './flight-picker.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    CitiesComponent,
    SelectRoutesComponent,
    SelectCityComponent,
    FlightDateSelectionComponent,
    DatePickerComponent,
    FlightPickerComponent
  ],
  exports: [
    CitiesComponent,
    FlightDateSelectionComponent,
    FlightPickerComponent
  ],
  providers: [
    SelectCityService
  ]
})
export class CitiesModule {}
