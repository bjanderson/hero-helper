import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService, DevtoolsRouterStateSerializer, metaReducers, StoreModule } from '@lernato/common-angular';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderNavModule } from './components/app-header-nav';
import { storeModules } from './store';

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
    { provide: RouterStateSerializer, useClass: DevtoolsRouterStateSerializer },
    { provide: ApiService, useClass: ApiService, deps: [ HttpClient ]}
  ],
})
export class AppModule { }
