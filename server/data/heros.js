import { Hero } from '../models'

export function getHeros() {
  return [
    new Hero({id: "1", name: 'Testman'}),
    new Hero({name: 'Batman'}),
    new Hero({name: 'Superman'}),
    new Hero({name: 'Spiderman'})
  ]
}
