import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class HeroesModule {}
