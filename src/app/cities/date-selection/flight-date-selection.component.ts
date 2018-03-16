import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {getNextDay} from '../../utils/date.utils';

export const DEPARTURE_DATE_FORM_CONTROL = 'departDate';
export const RETURN_DATE_FORM_CONTROL = 'returnDate';

@Component({
  selector: 'wizz-flight-date-selection',
  template: `
    <wizz-date-picker [minDate]="minDepartureDate"
                      [placeholder]='"Departure"'
                      [dateFormCtrl]='flightForm.controls[departDateString]'
                      (dateChange)='onDepartureDateChange($event)'></wizz-date-picker>
    <wizz-date-picker [minDate]='minReturnDate'
                      [placeholder]='"Return"'
                      [dateFormCtrl]='flightForm.controls[returnDateString]'></wizz-date-picker>
  `
})
export class FlightDateSelectionComponent implements OnInit {
  @Input() flightForm: FormGroup;
  public minDepartureDate: Date;
  public minReturnDate: Date;
  public departDateString = DEPARTURE_DATE_FORM_CONTROL;
  public returnDateString = RETURN_DATE_FORM_CONTROL;

  ngOnInit(): void {
    this.minDepartureDate = new Date();
    this.minReturnDate = getNextDay(this.flightForm.controls[this.departDateString].value);
    this.flightForm.controls[this.departDateString].setValidators([Validators.required]);
  }

  onDepartureDateChange(date: Date): void {
    this.minReturnDate = getNextDay(date);
    this.flightForm.controls[this.returnDateString].setValue('');
  }
}
