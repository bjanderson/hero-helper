import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxComponent } from './sandbox.component';

export const routes: Routes = [{
  path: '',
  component: SandboxComponent
}];

@NgModule({
  declarations: [
    SandboxComponent
  ],

  exports: [
    SandboxComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SandboxModule {}
