import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import {
  ApiService,
  AuthGuardService,
  GlobalVariablesService,
  PermissionsService,
  RequestBuilderService
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
    HttpModule,

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
    PermissionsService,
    RequestBuilderService
  ]
})
export class AppModule { }
