import { getArrayOfModels, getObject } from '@lernato/common';
import { Hero } from '../hero';


export class HeroStoreState {

  heroes: Hero[];

  constructor(obj?: any) {
    obj = getObject(obj);
    this.heroes = getArrayOfModels(Hero, obj.heroes);
  }
}
