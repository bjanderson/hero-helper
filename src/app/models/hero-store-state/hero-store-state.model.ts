import { getArrayOfModels, getObject } from '@practicalwebdev/utils';

import { Hero } from '../hero';

export class HeroStoreState {

  heroes: Hero[];

  constructor(obj?: any) {
    obj = getObject(obj);
    this.heroes = getArrayOfModels(Hero, obj.heroes);
  }
}
