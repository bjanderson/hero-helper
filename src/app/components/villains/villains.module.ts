import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class VillainsModule {}
