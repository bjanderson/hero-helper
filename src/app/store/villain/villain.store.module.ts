import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { VillainEffects } from './villain.store.effects';
import { villainReducer } from './villain.store.reducers';
import { VillainStoreService } from './villain.store.service';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature('villains', villainReducer),
    EffectsModule.forFeature([VillainEffects])
  ],

  providers: [
    VillainStoreService
  ]
})
export class VillainStoreModule {}
