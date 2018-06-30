const utils = require('./utils');

const config = utils.getConfig('store');
utils.createFolder(config.path);

createActions();
createActionsSpec();
createEffects();
createEffectsSpec();
createModule();
createReducer();
createReducerSpec();
createService();
createServiceSpec();
createIndex();
// addToStoresIndex();

console.log(`\n${config.pascal} store created successfully.\n`)

function createActions() {
  let text = `import { PayloadAction } from '../../models';

export const ${config.pascal}ActionTypes = {
  LOAD: '[${config.title}] Load',
  LOAD_FAIL: '[${config.title}] Load Fail',
  LOAD_SUCCESS: '[${config.title}] Load Success',
};

export class LoadAction extends PayloadAction {
  constructor () { super(${config.pascal}ActionTypes.LOAD); }
}

export class LoadFailAction extends PayloadAction {
  constructor (payload: any) { super(${config.pascal}ActionTypes.LOAD_FAIL, payload); }
}

export class LoadSuccessAction extends PayloadAction {
  constructor (payload: any) { super(${config.pascal}ActionTypes.LOAD_SUCCESS, payload); }
}

export type ${config.pascal}Action = LoadAction |
  LoadFailAction |
  LoadSuccessAction;
`;

  utils.writeToFile(config.path, `${config.name}.store.actions.ts`, text);
}

function createActionsSpec() {
  let text = `import {
  ${config.pascal}ActionTypes,

  LoadAction,
  LoadFailAction,
  LoadSuccessAction
} from './${config.name}.store.actions';

describe('${config.camel}Actions', function () {
  describe('${config.pascal}ActionTypes', function () {
    it('has an action named LOAD', function () {
      expect(${config.pascal}ActionTypes.LOAD).toEqual('[${config.title}] Load');
    });

    it('has an action named LOAD_FAIL', function () {
      expect(${config.pascal}ActionTypes.LOAD_FAIL).toEqual('[${config.title}] Load Fail');
    });

    it('has an action named LOAD_SUCCESS', function () {
      expect(${config.pascal}ActionTypes.LOAD_SUCCESS).toEqual('[${config.title}] Load Success');
    });
  });

  describe('LoadAction()', function () {
    it('sets action.type to LOAD', function () {
      const expected: any = '[${config.title}] Load';
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction()', function () {
    it('sets action.type to LOAD_FAIL', function () {
      const payload: any = 'test-payload';
      const expected: any = '[${config.title}] Load Fail';
      const result: any = new LoadFailAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', function () {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadFailAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadSuccessAction()', function () {
    it('sets action.type to LOAD_SUCCESS', function () {
      const payload: any = 'test-payload';
      const expected: any = '[${config.title}] Load Success';
      const result: any = new LoadSuccessAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', function () {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadSuccessAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });
});
`;

  utils.writeToFile(config.path, `${config.name}.store.actions.spec.ts`, text);
}

function createEffects() {
  let text = `import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ${config.pascal}Service } from '../../services';

import {
  ${config.pascal}Action,
  ${config.pascal}ActionTypes,
  LoadSuccessAction,
  LoadFailAction
} from './${config.name}.store.actions';

@Injectable()
export class ${config.pascal}Effects {
  @Effect()
  load${config.pascal}$: Observable<${config.pascal}Action> = this.actions$.pipe(
    ofType(${config.pascal}ActionTypes.LOAD),
    switchMap(this.load${config.pascal}.bind(this)));

  constructor(
    private actions$: Actions,
    private ${config.camel}Service: ${config.pascal}Service
  ) {}

  private load${config.pascal}(): Observable<${config.pascal}Action> {
    return this.${config.camel}Service.get${config.pascal}s().pipe(
      map((${config.camel}s: any[]) => new LoadSuccessAction(${config.camel}s)),
      catchError(error => of(new LoadFailAction(error))));
  }
}
`;

  utils.writeToFile(config.path, `${config.name}.store.effects.ts`, text);
}

function createEffectsSpec() {
  const text = `import { empty, of, throwError } from 'rxjs';
import { take } from 'rxjs/operators';

import {
  LoadSuccessAction,
  LoadFailAction
} from './${config.name}.store.actions';
import { ${config.pascal}Effects } from './${config.name}.store.effects';

describe('${config.pascal}Effects', function () {
  let effects: any;
  const actions$: any = empty();
  const ${config.camel}Service: any = {
    get: () => empty()
  };

  function init() {
    effects = new ${config.pascal}Effects(actions$, ${config.camel}Service);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });

  describe('load${config.pascal}()', function() {
    beforeEach(() => {
      init();
    });

    it('is a function', function() {
       expect(typeof effects.load${config.pascal}).toEqual('function');
    });

    it('calls ${config.camel}Service.get()', function() {
      const spy = spyOn(${config.camel}Service, 'get').and.returnValue(empty());
      effects.load${config.pascal}();
      expect(spy).toHaveBeenCalled();
    });

    it('it returns an instance of LoadSuccessAction', function(done) {
      effects.${config.camel}Service.get = () => of({});
      effects.load${config.pascal}().pipe(take(1)).subscribe(result => {
        expect(result instanceof LoadSuccessAction).toEqual(true);
        done();
      });
    });

    it('it returns an instance of LoadFailAction', function(done) {
      effects.${config.camel}Service.get = () => throwError({});
      effects.load${config.pascal}().pipe(take(1)).subscribe(result => {
        expect(result instanceof LoadFailAction).toEqual(true);
        done();
      });
    });
  });
});
`;

  utils.writeToFile(config.path, `${config.name}.store.effects.spec.ts`, text);
}

function createModule() {
  const text = `import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ${config.pascal}Effects } from './${config.name}.store.effects';
import { ${config.camel}Reducer } from './${config.name}.store.reducers';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature('${config.camel}s', ${config.camel}Reducer),
    EffectsModule.forFeature([${config.pascal}Effects])
  ]
})
export class ${config.pascal}StoreModule {}
`;

  utils.writeToFile(config.path, `${config.name}.store.module.ts`, text);
}

function createReducer() {
  let text = `import { ${config.pascal}StoreState } from '../../models';

import { ${config.pascal}Action, ${config.pascal}ActionTypes } from './${config.name}.store.actions';

export function ${config.camel}Reducer(state: ${config.pascal}StoreState = new ${config.pascal}StoreState(), action: ${config.pascal}Action): ${config.pascal}StoreState {

  switch (action.type) {

    case ${config.pascal}ActionTypes.LOAD_SUCCESS:
      return loadSuccess(state, action.payload);

    default:
      return state;
  }
}

function loadSuccess(state: ${config.pascal}StoreState, payload: any) {
  state.${config.camel}s = payload;
  return new ${config.pascal}StoreState(state);
}
`;

  utils.writeToFile(config.path, `${config.name}.store.reducers.ts`, text);
}

function createReducerSpec() {
  const text = `import { ${config.pascal}StoreState } from '../../models';

import { LoadSuccessAction } from './${config.name}.store.actions';
import { ${config.camel}Reducer } from './${config.name}.store.reducers';

describe('${config.camel}Reducer', function () {
  it('returns the given state by default', function () {
    const state = new ${config.pascal}StoreState();
    const expected: any = state;
    const result: any = ${config.camel}Reducer(state, <any>{type: 'default'});
    expect(result).toEqual(expected);
  });

  it('returns the state with the payload added', function () {
    const value = '${config.camel}';
    const state = new ${config.pascal}StoreState();
    const expected: any = new ${config.pascal}StoreState({value});
    const result: any = ${config.camel}Reducer(state, new LoadSuccessAction(value);
    expect(result).toEqual(expected);
  });
});
`;
  utils.writeToFile(config.path, `${config.name}.store.reducers.spec.ts`, text);
}

function createService() {
  const service = `import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { ${config.pascal}StoreState } from '../../models';

import { AppStoreService } from '../app/app.store.service';

import { LoadAction } from './${config.name}.store.actions';
import { ${config.pascal}StoreModule } from './${config.name}.store.module';

@Injectable({
  providedIn: ${config.pascal}StoreModule
})
export class ${config.pascal}StoreService extends AppStoreService {
  ${config.camel}s = createFeatureSelector<${config.pascal}StoreState>('${config.camel}s');
  ${config.camel}sSelector = createSelector(this.${config.camel}s, this.getProperty('${config.camel}s'));

  constructor(public store: Store<${config.pascal}StoreState>) { super(); }

  get${config.pascal}s() {
    return this.store.select(this.${config.camel}sSelector);
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
`;
  utils.writeToFile(config.path, `${config.name}.store.service.ts`, service);
}

function createServiceSpec() {
  const serviceSpec = `import { LoadAction } from './${config.name}.store.actions';
import { ${config.pascal}StoreService } from './${config.name}.store.service';

describe('${config.pascal}StoreService', function () {
  let service: ${config.pascal}StoreService;
  const store: any = {select: () => undefined};

  function init() {
    service = new ${config.pascal}StoreService(store);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('get${config.pascal}s()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named get${config.pascal}s', function () {
      expect(typeof service.get${config.pascal}s).toEqual('function');
    });

    it('calls store.select()', function () {
      spyOn(store, 'select').and.returnValue(null);
      service.get${config.pascal}s();
      expect(store.select).toHaveBeenCalledWith(service.${config.camel}sSelector);
    });
  });

  describe('dispatchLoadAction()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchLoadAction', function () {
      expect(typeof service.dispatchLoadAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchLoadAction();
      expect(service.dispatchAction).toHaveBeenCalledWith(new LoadAction());
    });
  });
});
`;
  utils.writeToFile(config.path, `${config.name}.store.service.spec.ts`, serviceSpec);
}

function createIndex() {
  const index = `export * from './${config.name}.store.module';
export * from './${config.name}.store.service';
`;
  utils.writeToFile(config.path, `index.ts`, index);
}

function addToStoresIndex() {
  let modelsIndex = utils.readFromFile(config.path, '../index.ts');
  let names = utils.parseImports(modelsIndex);
  if (names.indexOf(config.name) === -1) {
    names.push(config.name);
  }
  names.sort(function (a, b) { return a.localeCompare(b); });

  let contents = '';
  for (let name of names) {
    contents += `export * from './${name}';\n`;
  }

  utils.writeToFile(config.path, `../index.ts`, contents);
}
