import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorEffects } from './error.store.effects';
import { errorReducer } from './error.store.reducers';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature('errors', errorReducer),
    EffectsModule.forFeature([ErrorEffects])
  ]
})
export class ErrorStoreModule {}
