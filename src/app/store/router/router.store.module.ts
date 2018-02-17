import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { RouterEffects } from './router.store.effects';
import { RouterStoreService } from './router.store.service';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature([RouterEffects])
  ],

  providers: [
    RouterStoreService
  ]
})
export class RouterStoreModule {}
