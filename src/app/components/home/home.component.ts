import { Component } from '@angular/core';

@Component({
  selector: 'ys-home',
  styles: [require('./home.component.scss')],
  template: require('./home.component.html'),
})
export class HomeComponent {

  title: string = 'Hero Helper';

  constructor() {}
}
