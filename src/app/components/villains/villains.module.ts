import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VillainListModule } from '../villain-list';

import { VillainsComponent } from './villains.component';

export const routes: Routes = [{
  path: '',
  component: VillainsComponent
}];

@NgModule({
  declarations: [
    VillainsComponent
  ],

  exports: [
    VillainsComponent
  ],

  imports: [
    CommonModule,

    VillainListModule,

    RouterModule.forChild(routes)
  ]
})
export class VillainsModule {}
