import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'wizz-date-picker',
  template: `
    <mat-form-field>
      <input matInput [min]='minDate'
             [matDatepicker]="picker"
             [placeholder]="placeholder"
             [formControl]='dateFormCtrl'
             (click)='picker.open()'
             (dateChange)='dateChange.emit($event.value)'
             readonly>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `
})
export class DatePickerComponent implements OnInit {
  @Input() minDate: Date;
  @Input() placeholder: string;
  @Input() dateFormCtrl: FormControl;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter();

  ngOnInit(): void {
    if (!this.dateFormCtrl) {
      this.dateFormCtrl = new FormControl();
    }
  }
}
