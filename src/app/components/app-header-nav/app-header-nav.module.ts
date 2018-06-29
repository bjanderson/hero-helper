import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppHeaderNavComponent } from './app-header-nav.component';

@NgModule({
  declarations: [
    AppHeaderNavComponent
  ],

  exports: [
    AppHeaderNavComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppHeaderNavModule {}
