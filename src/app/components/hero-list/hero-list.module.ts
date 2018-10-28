import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroListComponent } from './hero-list.component';

@NgModule({
  declarations: [
    HeroListComponent
  ],

  exports: [
    HeroListComponent
  ],

  imports: [
    CommonModule
  ]
})
export class HeroListModule {}
