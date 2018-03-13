import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {AddDepartDate, AddDestinationByShortName, AddOriginByShortName, AddReturnDate} from '../store/city';
import {DESTINATION_FORM_CONTROL, ORIGIN_FORM_CONTROL} from './select-routes/select-routes.component';
import {DEPARTURE_DATE_FORM_CONTROL, RETURN_DATE_FORM_CONTROL} from './date-selection/flight-date-selection.component';

@Component({
  selector: 'wizz-flight-picker',
  template: `
    <form [formGroup]='flightForm' (ngSubmit)='onFormSubmit(flightForm.value)'>
      <wizz-cities [flightForm]='flightForm'></wizz-cities>
      <wizz-flight-date-selection [flightForm]='flightForm'></wizz-flight-date-selection>
      <button type='submit' mat-button [disabled]='!flightForm.valid'>Search</button>
    </form>
  `
})
export class FlightPickerComponent {
  public flightForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store$: Store<State>) {
    this.flightForm = this.createFlightForm(formBuilder);
  }

  createFlightForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      origin: '',
      destination: '',
      departDate: new Date(),
      returnDate: ''
    });
  }

  /**
   * Takes the value of form and pushed to the ngrx store
   * @param value
   */
  onFormSubmit(value: any) {
    this.store$.dispatch(new AddOriginByShortName(value[ORIGIN_FORM_CONTROL]));
    this.store$.dispatch(new AddDestinationByShortName(value[DESTINATION_FORM_CONTROL]));
    this.store$.dispatch(new AddDepartDate(value[DEPARTURE_DATE_FORM_CONTROL]));
    this.store$.dispatch(new AddReturnDate(value[RETURN_DATE_FORM_CONTROL]));
  }
}
