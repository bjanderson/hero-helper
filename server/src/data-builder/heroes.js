import { Hero } from '../models';

export function getHeroes() {
  return [
    new Hero({id: "1", name: 'Testman'}),
    new Hero({name: 'Good Man'}),
    new Hero({name: 'Helpful Woman'}),
    new Hero({name: 'Happy Boy'})
  ];
}
