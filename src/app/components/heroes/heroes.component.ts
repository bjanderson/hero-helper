import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HeroStoreService } from '../../store';

@Component({
  selector: 'hh-heroes',
  styleUrls: ['./heroes.component.scss'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnDestroy, OnInit {

  heroes$ = this.heroStoreService.getHeroes();
  unsubscribe$ = new Subject();

  constructor(
    private heroStoreService: HeroStoreService
  ) { }

  ngOnInit() {
    this.heroStoreService.getHeroes().pipe(
      takeUntil(this.unsubscribe$))
      .subscribe((heroes: any) => {
        console.log('heroes: ', heroes);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
