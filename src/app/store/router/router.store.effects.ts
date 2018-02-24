import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationPayload, RouterNavigationAction } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { concatMap, filter, map, tap } from 'rxjs/operators';

import { PayloadAction, RouteGoPayload } from '../../models';

import { HeroStoreService } from '../hero';
import { VillainStoreService } from '../villain';

import { BackAction, ForwardAction, GoAction, RouterActionTypes, RouteChangeAction } from './router.store.actions';
import { RouterStoreService } from './router.store.service';
import { log } from 'util';

// https://medium.com/@amcdnl/angular-routing-data-with-ngrx-effects-1cda1bd5e579
// https://github.com/amcdnl/ngrx-router/blob/master/src/effects.ts
@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private routerStoreService: RouterStoreService,
    private heroStoreService: HeroStoreService,
    private villainStoreService: VillainStoreService
  ) {
      this.listenToRouter();
  }

  @Effect({ dispatch: false })
  logTransition$: Observable<void> = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action: any) => action.payload),
    map((payload: RouterNavigationPayload<any>) => console.info('navigated to ' + payload.routerState.url))
  );

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.GO),
    map((action: GoAction) => action.payload),
    tap((payload: RouteGoPayload) => this.router.navigate(payload.path, {
      queryParams: payload.queryParams,
      ...payload.extras
    }))
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionTypes.BACK),
    tap(() => this.location.back()));

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionTypes.FORWARD),
    tap(() => this.location.forward())
  );

  @Effect({ dispatch: false }) heroRouted = this.actions$.pipe(
    this.ofRoute('heroes'),
    tap(() => this.heroStoreService.dispatchLoadAction())
  )

  @Effect({ dispatch: false }) villainRouted = this.actions$.pipe(
    this.ofRoute('villains'),
    tap(() => this.villainStoreService.dispatchLoadAction())
  )

  listenToRouter() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd)
    ).subscribe((event: ActivationEnd) => {
      return this.routerStoreService.dispatchRouteChangeAction({
        params: { ...event.snapshot.params },
        path: event.snapshot.routeConfig.path
      })
    });
  }

  ofRoute(route: string | string[]) {
    return filter((action: PayloadAction) => {

      const isRouteAction = action.type === RouterActionTypes.ROUTE_CHANGE;
      if (isRouteAction) {
        const routePath = action.payload.path;
        if (Array.isArray(route)) {
          return route.includes(routePath);
        } else {
          return routePath === route;
        }
      }

      return isRouteAction;
    });
  }
}
