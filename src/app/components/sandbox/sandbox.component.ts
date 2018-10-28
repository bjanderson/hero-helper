import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hh-sandbox',
  styleUrls: ['./sandbox.component.scss'],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent {
  constructor() {}
}
