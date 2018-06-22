import { Villain } from '../models'

export function getVillains() {
  return [
    new Villain({id: "1", name: 'Tester'}),
    new Villain({name: 'Annoying Man'}),
    new Villain({name: 'Bickering Woman'}),
    new Villain({name: 'Ignoramous'})
  ];
}
