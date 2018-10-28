import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hh-admin',
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  constructor() {}
}
