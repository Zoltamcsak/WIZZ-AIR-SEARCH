import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'wizz-flight-picker',
  template: `
    <wizz-cities [flightForm]='flightForm'></wizz-cities>
    <wizz-flight-date-selection [flightForm]='flightForm'></wizz-flight-date-selection>
    <button mat-button>Search</button>    
  `
})
export class FlightPickerComponent {
  public flightForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
}
