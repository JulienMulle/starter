import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootReducer, metaReducers, ROOT_FEATURE_KEY } from './state/00-reducer';
import { AppEffects } from './state/03-effect';
import { UsersData } from './api/users.data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictActionTypeUniqueness: true,
        strictActionImmutability:true
      }
    }),
    StoreDevtoolsModule.instrument({
      name: 'decouverte de ngrx',
      maxAge: 25, 
      logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    InMemoryWebApiModule.forRoot(UsersData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
