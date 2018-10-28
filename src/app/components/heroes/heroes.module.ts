import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListModule } from '../hero-list';

import { HeroesComponent } from './heroes.component';

export const routes: Routes = [{
  path: '',
  component: HeroesComponent
}];

@NgModule({
  declarations: [
    HeroesComponent
  ],

  exports: [
    HeroesComponent
  ],

  imports: [
    CommonModule,

    HeroListModule,

    RouterModule.forChild(routes)
  ]
})
export class HeroesModule {}
