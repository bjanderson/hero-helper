import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import {
  ApiService,
  AuthGuardService,
  GlobalVariablesService,
  PermissionsService
} from '../../services';

import {
  AppStoreModule,
  RouterStoreModule,
  metaReducers
} from '../../store';

import { AppComponent } from './app.component';
import { AppHeaderNavModule } from './app-header-nav';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],

  imports: [
    BrowserModule,
    HttpClientModule,

    AppStoreModule,
    RouterStoreModule,
    StoreModule.forRoot({} as any, {initialState: {}, metaReducers}),
    StoreRouterConnectingModule,

    AppHeaderNavModule,
    AppRoutingModule
  ],

  providers: [
    ApiService,
    AuthGuardService,
    GlobalVariablesService,
    PermissionsService
  ]
})
export class AppModule { }
