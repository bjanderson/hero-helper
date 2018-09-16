export { HeroStoreService } from './hero';
export { RouterStoreService } from './router';
export { VillainStoreService } from './villain';

import { HeroStoreModule } from './hero';
import { RouterStoreModule } from './router';
import { VillainStoreModule } from './villain';

export const storeModules = [
  HeroStoreModule,
  RouterStoreModule,
  VillainStoreModule
];
