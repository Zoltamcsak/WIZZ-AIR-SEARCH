import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'wizz-flight-date-selection',
  template: `
    <wizz-date-picker [minDate]="minDepartureDate"
                      [placeholder]='"Departure"'
                      [dateFormCtrl]='flightForm.controls["departDate"]'
                      (dateChange)='onDepartureDateChange($event)'></wizz-date-picker>
    <wizz-date-picker [minDate]='minReturnDate'
                      [placeholder]='"Return"'
                      [dateFormCtrl]='flightForm.controls["returnDate"]'></wizz-date-picker>
  `
})
export class FlightDateSelectionComponent implements OnInit {
  @Input() flightForm: FormGroup;
  public minDepartureDate: Date;
  public minReturnDate: Date;

  ngOnInit(): void {
    this.minDepartureDate = new Date();
    this.minReturnDate = this.getNextDay(this.flightForm.controls['departDate'].value);
  }

  onDepartureDateChange(date: Date): void {
    this.minReturnDate = this.getNextDay(date);
  }

  getNextDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() + 1);
  }
}
