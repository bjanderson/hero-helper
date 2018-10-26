import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApiService, DevtoolsRouterStateSerializer, metaReducers, StoreModule } from '@practicalwebdev/utils';

import { environment } from '../environments/environment';

import { AppHeaderNavModule } from './components/app-header-nav';

import { storeModules } from './store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomErrorHandler } from './custom-error-handler';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],

  imports: [
    BrowserModule,
    HttpClientModule,

    StoreModule,
    ...storeModules,
    NgrxStoreModule.forRoot({} as any, {initialState: {}, metaReducers}),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument({maxAge: 50}),

    AppHeaderNavModule,
    AppRoutingModule
  ],

  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: RouterStateSerializer, useClass: DevtoolsRouterStateSerializer },
    { provide: ApiService, useClass: ApiService, deps: [ HttpClientModule ]}
  ]
})
export class AppModule { }
