import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './app.store.reducers';

@NgModule({
  exports: [StoreModule],

  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    APP_METADATA.ENV === 'development' ? StoreDevtoolsModule.instrument({maxAge: 50}) : []
  ]
})
export class AppStoreModule {}
