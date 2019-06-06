import { EMPTY, of } from 'rxjs';
import { RouterActionTypes } from './router.store.actions';
import { RouterEffects } from './router.store.effects';

describe('RouterEffects', function () {
  let effects: RouterEffects;
  const actions: any = EMPTY;
  const router: any = { events: EMPTY, navigate: () => undefined };
  const location: any = {back: () => undefined, forward: () => undefined};
  const routerStoreService: any = {dispatchRouteChangeAction: () => undefined};
  const heroStoreService: any = {dispatchLoadAction: () => undefined};
  const villainStoreService: any = {dispatchLoadAction: () => undefined};

  function init() {
    effects = new RouterEffects(actions, router, location, routerStoreService, heroStoreService, villainStoreService);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('constructs', function () {
      expect(effects).toBeDefined();
    });
  });

  describe('listenToRouter()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named listenToRouter', function () {
      expect(typeof effects.listenToRouter).toEqual('function');
    });
  });

  describe('changeRoute()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named changeRoute', function () {
      expect(typeof effects.changeRoute).toEqual('function');
    });

    it('calls routerStoreService.dispatchRouteChangeAction()', function () {
      spyOn(routerStoreService, 'dispatchRouteChangeAction').and.returnValue(null);
      effects.changeRoute(<any>{snapshot: {params: [], routeConfig: {path: 'test-url'}}});
      expect(routerStoreService.dispatchRouteChangeAction).toHaveBeenCalled();
    });
  });

  /* describe('logTransition(action: any)', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named logTransition', function () {
      expect(typeof effects.logTransition).toEqual('function');
    });

    it('calls console.info()', function () {
      spyOn(console, 'info').and.returnValue(null);
      effects.logTransition(<any>{routerState: {url: 'test-url'}});
      expect(console.info).toHaveBeenCalled();
    });
  }); */

  describe('navigate(action: GoAction)', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named navigate', function () {
      expect(typeof effects.navigate).toEqual('function');
    });

    it('calls router.navigate()', function () {
      spyOn(router, 'navigate').and.returnValue(null);
      effects.navigate(<any>{path: '', queryParams: '', extras: []});
      expect(router.navigate).toHaveBeenCalled();
    });
  });

  describe('navigateBack(action: GoAction)', function () {
    beforeEach(() => {
      init();
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
      init();
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
      init();
    });

    it('has a function named ofRoute', function () {
      expect(typeof effects.ofRoute).toEqual('function');
    });

    it('returns the action if the route matches the payload path', function (done) {
      const action = {type: RouterActionTypes.ROUTE_CHANGE, payload: {path: 'test'}};
      of(action)
        .pipe(effects.ofRoute('test'))
        .subscribe(result => {
          expect(result).toEqual(action);
          done();
        });
    });

    it('returns the action if the payload path is in the route array', function (done) {
      const action = {type: RouterActionTypes.ROUTE_CHANGE, payload: {path: 'test'}};
      of(action)
        .pipe(effects.ofRoute(['test']))
        .subscribe(result => {
          expect(result).toEqual(action);
          done();
        });
    });
  });

  describe('loadHeroes(action: GoAction)', function () {
    beforeEach(() => {
      init();
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
      init();
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
