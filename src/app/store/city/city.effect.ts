import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import {AddDestination, AddOrigin, AddOriginByShortName, CityActionTypes, GetAllCitiesSuccess} from './city.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/withLatestFrom';
import {SelectCityService} from '../../cities/select-routes/select-city.service';
import {State} from '../reducer';
import * as _ from 'lodash';
import {City} from '../../cities/select-routes/city';

/**
 * This is a side effect that comes with ngrx (redux) store and it handles back end requests for cities
 */

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

  @Effect() addOriginByShortname: Observable<Action> = this.actions$
    .ofType(CityActionTypes.ADD_ORIGIN_BY_SHORTNAME)
    .map((action: AddOriginByShortName) => action.payload)
    .withLatestFrom(this.store$.select(state => state.cityState.cities))
    .map(([cityName, cities]) => {
      const originCity = _.find(cities, (city: City) => city.shortName === cityName);
      return new AddOrigin(originCity);
    })
    .catch(err => {
      console.error(`An error occured when fetching origin city: ${err}`);
      return Observable.of(new AddOrigin(null));
    });

  @Effect() addDestinationByShortname: Observable<Action> = this.actions$
    .ofType(CityActionTypes.ADD_DESTINATION_BY_SHORTNAME)
    .map((action: AddOriginByShortName) => action.payload)
    .withLatestFrom(this.store$.select(state => state.cityState.cities))
    .map(([cityName, cities]) => {
      const originCity = _.find(cities, (city: City) => city.shortName === cityName);
      return new AddDestination(originCity);
    })
    .catch(err => {
      console.error(`An error occured when fetching destination city: ${err}`);
      return Observable.of(new AddDestination(null));
    });

  constructor(private actions$: Actions,
              private store$: Store<State>,
              private cityService: SelectCityService) {}
}
