import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers } from './app.store.reducers';

@NgModule({
  exports: [StoreModule],

  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([])
  ]
})
export class AppStoreModule {}
