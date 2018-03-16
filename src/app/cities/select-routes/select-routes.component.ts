import {Component, Input, OnInit} from '@angular/core';
import {City} from './city';
import {Dictionary} from 'lodash';
import {FormGroup} from '@angular/forms';
import {SelectCityService} from './select-city.service';
import {getElementFromLocalStorage, setElementToLocalStorage} from '../../utils/local-storage.utils';

export const ORIGIN_FORM_CONTROL = 'origin';
export const DESTINATION_FORM_CONTROL = 'destination';

@Component({
  selector: 'wizz-select-routes',
  template: `
    <wizz-select-city [cities]='cityArray'
                      [form]='form.controls[originFormCtrlString]'
                      (citySelected)='onOriginSelected($event)'></wizz-select-city>
    <wizz-select-city [cities]='connectionCities'
                      [form]='form.controls[destinationFormCtrlString]'
                      (citySelected)='onDestinationSelected($event)'></wizz-select-city>
  `
})
export class SelectRoutesComponent implements OnInit {
  @Input() cities: Dictionary<City>;
  @Input() form: FormGroup;

  public cityArray: City[];
  public connectionCities: City[] = [];
  public originFormCtrlString = ORIGIN_FORM_CONTROL;
  public destinationFormCtrlString = DESTINATION_FORM_CONTROL;

  constructor(private selectCityService: SelectCityService) {}

  ngOnInit() {
    this.cityArray = Object.values(this.cities);
    if (this.form.controls[ORIGIN_FORM_CONTROL].value) {
      const originCity = <City>getElementFromLocalStorage(ORIGIN_FORM_CONTROL);
      this.connectionCities = this.selectCityService.getCitiesFromConnections(originCity.connections, this.cities);
    } else {
      this.form.controls[this.destinationFormCtrlString].disable();
    }
  }

  onOriginSelected(city: City): void {
    setElementToLocalStorage(ORIGIN_FORM_CONTROL, city);
    setElementToLocalStorage(DESTINATION_FORM_CONTROL, null);
    this.connectionCities = this.selectCityService.getCitiesFromConnections(city.connections, this.cities);
    this.form.controls[this.destinationFormCtrlString].enable();
    this.form.controls[this.destinationFormCtrlString].setValue('');
  }

  onDestinationSelected(city: City): void {
    setElementToLocalStorage(DESTINATION_FORM_CONTROL, city);
  }
}
