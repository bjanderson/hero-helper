import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppHeaderNavModule } from './components/app-header-nav';

import { storeModules } from './store';
import { metaReducers } from './store/app';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],

  imports: [
    BrowserModule,
    HttpClientModule,

    ...storeModules,
    StoreModule.forRoot({} as any, {initialState: {}, metaReducers}),
    StoreRouterConnectingModule,

    AppHeaderNavModule,
    AppRoutingModule
  ]
})
export class AppModule { }
