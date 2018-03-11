import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SelectCityService} from './select-city/select-city.service';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {initState, reducers} from './store/reducer';
import {EffectsModule} from '@ngrx/effects';
import {CityEffect} from './store/city/city.effect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {initialState: initState}),
    EffectsModule.forRoot([CityEffect])
  ],
  providers: [
    SelectCityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
