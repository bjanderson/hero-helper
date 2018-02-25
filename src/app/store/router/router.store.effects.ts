import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationPayload, RouterNavigationAction } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { concatMap, filter, map, tap } from 'rxjs/operators';

import { PayloadAction, RouteGoPayload, RouteChangePayload } from '../../models';

import { HeroStoreService } from '../hero';
import { VillainStoreService } from '../villain';

import { BackAction, ForwardAction, GoAction, RouterActionTypes, RouteChangeAction } from './router.store.actions';
import { RouterStoreService } from './router.store.service';
import { log } from 'util';

// https://medium.com/@amcdnl/angular-routing-data-with-ngrx-effects-1cda1bd5e579
// https://github.com/amcdnl/ngrx-router/blob/master/src/effects.ts
@Injectable()
export class RouterEffects {

  @Effect({ dispatch: false })
  logTransition$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map(this.logTransition.bind(this)));

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.GO),
    tap(this.navigate.bind(this)));

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionTypes.BACK),
    tap(this.navigateBack.bind(this)));

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionTypes.FORWARD),
    tap(this.navigateForward.bind(this)));

  @Effect({ dispatch: false }) heroRouted = this.actions$.pipe(
    this.ofRoute('heroes'),
    tap(this.loadHeroes.bind(this)));

  @Effect({ dispatch: false }) villainRouted = this.actions$.pipe(
    this.ofRoute('villains'),
    tap(this.loadVillains.bind(this)));

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

  listenToRouter() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd)
    ).subscribe(this.changeRoute.bind(this));
  }

  changeRoute(event: ActivationEnd) {
    return this.routerStoreService
      .dispatchRouteChangeAction(new RouteChangePayload({
        params: { ...event.snapshot.params },
        path: event.snapshot.routeConfig.path
      }));
  }

  logTransition(action: any) {
    console.info.call(console, 'navigated to ' + action.payload.routerState.url);
  }

  navigate(action: GoAction) {
    return this.router.navigate(action.payload.path, {
      queryParams: action.payload.queryParams,
      ...action.payload.extras
    });
  }

  navigateBack() {
    return this.location.back();
  }

  navigateForward() {
    return this.location.forward();
  }

  ofRoute(route: string | string[]) {
    return filter((action: PayloadAction) => {

      const isRouteChangeAction = action.type === RouterActionTypes.ROUTE_CHANGE;
      if (isRouteChangeAction) {
        const routePath = action.payload.path;
        if (Array.isArray(route)) {
          return route.includes(routePath);
        } else {
          return routePath === route;
        }
      }

      return isRouteChangeAction;
    });
  }

  loadHeroes() {
    return this.heroStoreService.dispatchLoadAction();
  }

  loadVillains() {
    return this.villainStoreService.dispatchLoadAction();
  }
}
