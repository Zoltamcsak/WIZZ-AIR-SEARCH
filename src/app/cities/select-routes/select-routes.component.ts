import {Component, Input, OnInit} from '@angular/core';
import {City} from './city';
import {Dictionary} from 'lodash';
import {FormGroup} from '@angular/forms';
import {SelectCityService} from './select-city.service';

@Component({
  selector: 'wizz-select-routes',
  template: `
    <form class="example-form">
      <wizz-select-city [cities]='cityArray'
                        [form]='form.controls["origin"]'
                        (citySelected)='onOriginSelected($event)'></wizz-select-city>
      <wizz-select-city [cities]='connectionCities'
                        [form]='form.controls["destination"]'
                        (citySelected)='onDestinationSelected($event)'
      ></wizz-select-city>
    </form>
  `
})
export class SelectRoutesComponent implements OnInit {
  @Input() cities: Dictionary<City>;
  @Input() form: FormGroup;

  public cityArray: City[];
  public connectionCities: City[] = [];

  constructor(private selectCityService: SelectCityService) {}

  ngOnInit() {
    this.cityArray = Object.values(this.cities);
    this.form.controls['destination'].disable();
  }

  onOriginSelected(city: City): void {
    this.connectionCities = this.selectCityService.getCitiesFromConnections(city.connections, this.cities);
    this.form.controls['destination'].enable();
  }

  onDestinationSelected(city: City): void {
    console.log(city);
  }
}
