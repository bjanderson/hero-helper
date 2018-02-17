import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationPayload } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  logTransition$: Observable<void> = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action: any) => action.payload),
    map((payload: RouterNavigationPayload<any>) => console.log('navigated to ' + payload.routerState.url))
  );

  constructor(private actions$: Actions) {}
}
