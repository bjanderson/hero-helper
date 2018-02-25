import { Component } from '@angular/core';

import { VillainStoreService } from '../../store';

@Component({
  selector: 'hh-villains',
  styles: [require('./villains.component.scss')],
  template: require('./villains.component.html'),
})
export class VillainsComponent {

  villains$ = this.villainStoreService.getVillains();

  constructor(
    private villainStoreService: VillainStoreService
  ) {}
}
