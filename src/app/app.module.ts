import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {initState, reducers} from './store/reducer';
import {EffectsModule} from '@ngrx/effects';
import {CityEffect} from './store/city/city.effect';
import {CitiesModule} from './cities/cities.module';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CitiesModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {initialState: initState}),
    EffectsModule.forRoot([CityEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
