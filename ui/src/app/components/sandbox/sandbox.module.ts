import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SandboxModule {}
