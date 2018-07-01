import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hh-app-header-nav',
  styleUrls: ['./app-header-nav.component.scss'],
  templateUrl: './app-header-nav.component.html'
})
export class AppHeaderNavComponent {
  constructor() {}
}
