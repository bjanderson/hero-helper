import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppHeaderNavModule } from './components/app-header-nav';

import { storeModules } from './store';
import { metaReducers } from './store/app';

import { AppComponent } from './app.component';
import { CustomSerializer } from './app-devtools-utils';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],

  imports: [
    BrowserModule,
    HttpClientModule,

    ...storeModules,
    StoreModule.forRoot({} as any, {initialState: {}, metaReducers}),

    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    environment.production ? [] : StoreDevtoolsModule.instrument({maxAge: 50}),

    AppHeaderNavModule,
    AppRoutingModule
  ],

  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class AppModule { }
