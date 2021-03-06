import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'hh-page-not-found',
  styleUrls: ['./page-not-found.component.scss'],
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
