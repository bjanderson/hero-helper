import { Component, OnInit } from '@angular/core';
import { HeroStoreService } from '../../store';

@Component({
  selector: 'hh-heroes',
  styleUrls: ['./heroes.component.scss'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes$ = this.heroStoreService.getHeroes();

  constructor(
    private heroStoreService: HeroStoreService
  ) { }

  ngOnInit() {
    this.heroStoreService.getHeroes().subscribe((heroes: any) => {
      console.log('heroes: ', heroes);
    });
  }
}