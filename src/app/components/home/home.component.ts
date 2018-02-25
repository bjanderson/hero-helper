import { Component } from '@angular/core';

@Component({
  selector: 'hh-home',
  styles: [require('./home.component.scss')],
  template: require('./home.component.html'),
})
export class HomeComponent {

  title = 'Hero Helper';

  constructor() {}
}
