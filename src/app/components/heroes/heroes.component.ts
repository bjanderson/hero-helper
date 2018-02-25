import { Component } from '@angular/core';
import { HeroStoreService } from '../../store';

@Component({
  selector: 'hh-heroes',
  styles: [require('./heroes.component.scss')],
  template: require('./heroes.component.html'),
})
export class HeroesComponent {

  heroes$ = this.heroStoreService.getHeroes();

  constructor(
    private heroStoreService: HeroStoreService
  ) {}
}
