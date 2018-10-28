import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Hero } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hh-hero-list',
  styleUrls: ['./hero-list.component.scss'],
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent {
  @Input() heroes: Hero[] = [];

  constructor() {}
}
