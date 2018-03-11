import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './store/reducer';
import {GetAllCities} from './store/city';

@Component({
  selector: 'wizz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store$: Store<State>) {
    this.store$.dispatch(new GetAllCities());
  }
}
