import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {City} from '../select-routes/city';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import {cityInListValidator} from '../shared/validators';

@Component({
  selector: 'wizz-select-city',
  template: `
    <mat-form-field class="example-full-width">
      <input type="text" placeholder="Select city" aria-label="Number" matInput [formControl]="form" [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let city of filteredCities$ | async"
                    [value]="city.shortName"
                    (onSelectionChange)='citySelected.emit(city)'>
          {{ city?.shortName }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `
})
export class SelectCityComponent implements OnInit, OnChanges {
  @Input() public cities: City[];
  @Input() public form: FormControl;
  @Output() public citySelected: EventEmitter<City> = new EventEmitter<City>();

  public filteredCities$: Observable<City[]>;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.setValidators([cityInListValidator(this.cities)]);
    this.filteredCities$ = this.form.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(this.cities, value))
    );
  }

  filter(cities: City[], val: string): City[] {
    return cities.filter(city =>
      city.shortName.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
