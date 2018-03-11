import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {Observable} from 'rxjs/Observable';
import {Dictionary} from 'lodash';
import {FormGroup} from '@angular/forms';
import {City} from './select-routes/city';

@Component({
  selector: 'wizz-cities',
  template: `
    <wizz-select-routes *ngIf='cities$ | async'
                        [cities]='cities$ | async'
                        [form]='flightForm'></wizz-select-routes>
  `
})
export class CitiesComponent {
  @Input() public flightForm: FormGroup;
  public cities$: Observable<Dictionary<City>>;

  constructor(private store$: Store<State>) {
    this.cities$ = this.store$.select(state => state.cityState.cities);
  }
}
