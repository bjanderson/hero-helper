import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VillainListComponent } from './villain-list.component';

@NgModule({
  declarations: [
    VillainListComponent
  ],

  exports: [
    VillainListComponent
  ],

  imports: [
    CommonModule
  ]
})
export class VillainListModule {}
