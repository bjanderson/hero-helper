import { Component } from '@angular/core';

import { VillainStoreService } from '../../store';

@Component({
  selector: 'hh-villains',
  styleUrls: ['./villains.component.scss'],
  templateUrl: './villains.component.html'
})
export class VillainsComponent {

  villains$ = this.villainStoreService.getVillains();

  constructor(
    private villainStoreService: VillainStoreService
  ) {}
}
