import { empty } from "rxjs/observable/empty";

import { RouterEffects } from './router.store.effects';

describe('RouterEffects', function () {
  let effects: RouterEffects;
  let actions: any = empty();
  let router: any = { events: empty(), navigate: () => undefined };
  let location: any = {back: () => undefined, forward: () => undefined};
  let routerStoreService: any = {dispatchRouteChangeAction: () => undefined};
  let heroStoreService: any = {dispatchLoadAction: () => undefined};
  let villainStoreService: any = {dispatchLoadAction: () => undefined};

  describe('constructor', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('constructs', function () {
      expect(effects).toBeDefined();
    });
  });

  describe('listenToRouter()', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named listenToRouter', function () {
      expect(typeof effects.listenToRouter).toEqual('function');
    });
  });

  describe('changeRoute()', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named changeRoute', function () {
      expect(typeof effects.changeRoute).toEqual('function');
    });

    it('calls routerStoreService.dispatchRouteChangeAction()', function () {
      spyOn(routerStoreService, 'dispatchRouteChangeAction').and.returnValue(null);
      effects.changeRoute({snapshot: {params: [], routeConfig: {path: 'test-url'}}} as any);
      expect(routerStoreService.dispatchRouteChangeAction).toHaveBeenCalled();
    });
  });

  describe('logTransition(action: any)', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named logTransition', function () {
      expect(typeof effects.logTransition).toEqual('function');
    });

    it('calls console.info()', function () {
      spyOn(console, 'info').and.returnValue(null);
      effects.logTransition({payload: {routerState: {url: 'test-url'}}} as any);
      expect(console.info).toHaveBeenCalled();
    });
  });

  describe('navigate(action: GoAction)', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named navigate', function () {
      expect(typeof effects.navigate).toEqual('function');
    });

    it('calls router.navigate()', function () {
      spyOn(router, 'navigate').and.returnValue(null);
      effects.navigate({payload: {path: '', queryParams: '', extras: []}} as any);
      expect(router.navigate).toHaveBeenCalled();
    });
  });

  describe('navigateBack(action: GoAction)', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named navigateBack', function () {
      expect(typeof effects.navigateBack).toEqual('function');
    });

    it('calls location.back()', function () {
      spyOn(location, 'back').and.returnValue(null);
      effects.navigateBack();
      expect(location.back).toHaveBeenCalled();
    });
  });

  describe('navigateForward(action: GoAction)', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named navigateForward', function () {
      expect(typeof effects.navigateForward).toEqual('function');
    });

    it('calls location.forward()', function () {
      spyOn(location, 'forward').and.returnValue(null);
      effects.navigateForward();
      expect(location.forward).toHaveBeenCalled();
    });
  });

  describe('ofRoute(route: string | string[])', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named ofRoute', function () {
      expect(typeof effects.ofRoute).toEqual('function');
    });
  });

  describe('loadHeroes(action: GoAction)', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named loadHeroes', function () {
      expect(typeof effects.loadHeroes).toEqual('function');
    });

    it('calls heroStoreService.dispatchLoadAction()', function () {
      spyOn(heroStoreService, 'dispatchLoadAction').and.returnValue(null);
      effects.loadHeroes();
      expect(heroStoreService.dispatchLoadAction).toHaveBeenCalled();
    });
  });

  describe('loadVillains(action: GoAction)', function () {
    beforeEach(() => {
      effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
    });

    it('has a function named loadVillains', function () {
      expect(typeof effects.loadVillains).toEqual('function');
    });

    it('calls villainStoreService.dispatchLoadAction()', function () {
      spyOn(villainStoreService, 'dispatchLoadAction').and.returnValue(null);
      effects.loadVillains();
      expect(villainStoreService.dispatchLoadAction).toHaveBeenCalled();
    });
  });
});
