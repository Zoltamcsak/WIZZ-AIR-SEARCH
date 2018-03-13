import {City} from '../select-routes/city';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import * as _ from 'lodash';

/**
 * Form validator that return null if the form is valid and control object if not
 * @param {City[]} cities
 * @returns {ValidatorFn}
 */
export function cityInListValidator(cities: City[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isValueInList = !!_.find(cities, (city: City) => city.shortName === control.value);
    return isValueInList ? null : {'cityNotInList': {value: control.value}};
  };
}

