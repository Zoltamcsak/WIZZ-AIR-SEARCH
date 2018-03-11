import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {Observable} from 'rxjs/Observable';
import {Dictionary} from 'lodash';
import {FormBuilder, FormGroup} from '@angular/forms';
import {City} from './select-routes/city';

@Component({
  selector: 'wizz-cities',
  template: `
    <wizz-select-routes *ngIf='cities$ | async'
                        [cities]='cities$ | async'
                        [form]='cityForm'></wizz-select-routes>
  `
})
export class CitiesComponent {
  public cities$: Observable<Dictionary<City>>;
  public cityForm: FormGroup;

  constructor(private store$: Store<State>,
              private formBuilder: FormBuilder) {
    this.cities$ = this.store$.select(state => state.cityState.cities);
    this.cityForm = this.createFormForSearch();
  }

  createFormForSearch(): FormGroup {
    return this.formBuilder.group({
      origin: '',
      destination: ''
    });
  }
}
