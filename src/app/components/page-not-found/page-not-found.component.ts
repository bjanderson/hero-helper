import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hh-page-not-found',
  styles: [require('./page-not-found.component.scss')],
  template: require('./page-not-found.component.html')
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
