import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from './store/reducer';
import {GetAllCities} from './store/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cities$: Observable<any>;
  constructor(private store$: Store<State>) {
    this.store$.dispatch(new GetAllCities());
    this.cities$ = this.store$.select(state => state.cities);
  }
}
