import { Hero } from '../hero';
import { Utils } from '../utils';

export class HeroStoreState {

  heroes: Hero[];

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.heroes = Utils.array.getArrayOfModels(Hero, obj.heroes);
  }
}
