import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {SelectCityService} from '../../select-city/select-city.service';
import {CityActionTypes, GetAllCitiesSuccess} from './city.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class CityEffect {
  @Effect() getCities: Observable<Action> = this.actions$
    .ofType(CityActionTypes.GET_ALL_CITIES)
    .switchMap(() => this.cityService.getAllCities()
      .map((cities) => new GetAllCitiesSuccess(cities))
      .catch((error) => {
        console.error(`Error occred while fetching the list of cities: ${error}`);
        return Observable.of(new GetAllCitiesSuccess(null));
      })
    );

  constructor(private actions$: Actions,
              private cityService: SelectCityService) {}
}
