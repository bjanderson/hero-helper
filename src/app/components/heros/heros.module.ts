import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HerosComponent } from './heros.component';

export const routes: Routes = [{
  path: '',
  component: HerosComponent
}];

@NgModule({
  declarations: [
    HerosComponent
  ],

  exports: [
    HerosComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HerosModule {}
