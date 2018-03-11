import {NgModule} from '@angular/core';
import {CitiesComponent} from './cities.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SelectRoutesComponent} from './select-routes/select-routes.component';
import {SelectCityService} from './select-routes/select-city.service';
import {SelectCityComponent} from './select-city/select-city.component';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    CitiesComponent,
    SelectRoutesComponent,
    SelectCityComponent
  ],
  exports: [
    CitiesComponent
  ],
  providers: [
    SelectCityService
  ]
})
export class CitiesModule {}
