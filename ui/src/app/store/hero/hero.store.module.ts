import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeroEffects } from './hero.store.effects';
import { heroReducer } from './hero.store.reducers';
import { HeroStoreService } from './hero.store.service';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature('heroes', heroReducer),
    EffectsModule.forFeature([HeroEffects])
  ],

  providers: [
    HeroStoreService
  ]
})
export class HeroStoreModule {}
