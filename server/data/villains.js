import { Villain } from '../models'

export function getVillains() {
  return [
    new Villain({id: "1", name: 'Tester'}),
    new Villain({name: 'Joker'}),
    new Villain({name: 'Two Face'}),
    new Villain({name: 'Enigma'})
  ]
}
