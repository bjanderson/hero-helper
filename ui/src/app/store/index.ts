export { HeroStoreService } from './hero';
export { RouterStoreService } from './router';
export { VillainStoreService } from './villain';

import { AppStoreModule } from './app';
import { HeroStoreModule } from './hero';
import { RouterStoreModule } from './router';
import { VillainStoreModule } from './villain';

export const storeModules = [
  AppStoreModule,
  HeroStoreModule,
  RouterStoreModule,
  VillainStoreModule
];
