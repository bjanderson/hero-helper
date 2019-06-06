import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { PayloadAction, Route } from '@lernato/common-angular';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, RouterNavigationPayload, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { filter, map, tap } from 'rxjs/operators';
import { HeroStoreService } from '../hero';
import { VillainStoreService } from '../villain';
import { GoAction, RouterActionTypes } from './router.store.actions';
import { RouterStoreService } from './router.store.service';

@Injectable()
export class RouterEffects {

  @Effect({ dispatch: false })
  logTransition$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action: RouterNavigationAction) => action.payload),
    tap(this.logTransition.bind(this))
  );

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.GO),
    map((action: GoAction) => action.payload),
    tap(this.navigate.bind(this))
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionTypes.BACK),
    tap(this.navigateBack.bind(this))
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionTypes.FORWARD),
    tap(this.navigateForward.bind(this))
  );

  @Effect({ dispatch: false })
  heroRouted = this.actions$.pipe(
    this.ofRoute('heroes'),
    tap(this.loadHeroes.bind(this))
  );

  @Effect({ dispatch: false })
  villainRouted = this.actions$.pipe(
    this.ofRoute('villains'),
    tap(this.loadVillains.bind(this))
  );

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
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd)
    ).subscribe(this.changeRoute.bind(this));
  }

  changeRoute(event: ActivationEnd) {
    this.routerStoreService.dispatchRouteChangeAction(new Route({
      params: { ...event.snapshot.params },
      path: event.snapshot.routeConfig.path
    }));
  }

  logTransition(payload: RouterNavigationPayload<any>) {
    // console.log(console, 'navigated to ' + payload.routerState.url);
  }

  navigate(payload: Route) {
    this.router.navigate(payload.path, {
      queryParams: payload.params,
      ...payload.extras
    });
  }

  navigateBack() {
    this.location.back();
  }

  navigateForward() {
    this.location.forward();
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

      return false;
    });
  }

  loadHeroes() {
    this.heroStoreService.dispatchLoadAction();
  }

  loadVillains() {
    this.villainStoreService.dispatchLoadAction();
  }
}
