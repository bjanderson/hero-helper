import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariablesService {
  get APP_METADATA(): string { return APP_METADATA; }
  get HOSTNAME(): string { return window.location.hostname; }
}
