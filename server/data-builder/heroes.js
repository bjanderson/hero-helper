import { Hero } from '../models'

export function getHeroes() {
  return [
    new Hero({id: "1", name: 'Testman'}),
    new Hero({name: 'Batman'}),
    new Hero({name: 'Superman'}),
    new Hero({name: 'Spiderman'})
  ]
}
