import { ChangeDetectionStrategy, Component } from '@angular/core';

import { VillainStoreService } from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
