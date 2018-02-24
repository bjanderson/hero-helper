import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroesModule {}
