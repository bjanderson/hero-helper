import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Villain } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hh-villain-list',
  styleUrls: ['./villain-list.component.scss'],
  templateUrl: './villain-list.component.html'
})
export class VillainListComponent {
  @Input() villains: Villain[] = [];

  constructor() {}
}
