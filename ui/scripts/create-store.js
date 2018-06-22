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
addToStoresIndex();

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
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ${config.pascal} } from '../../models';
import { ${config.pascal}Service } from '../../services';

import { ${config.pascal}ActionTypes, LoadSuccessAction, LoadFailAction } from './${config.name}.store.actions';

@Injectable()
export class ${config.pascal}Effects {
  @Effect()
  load${config.pascal}$: Observable<Action> = this.actions$.pipe(
    ofType(${config.pascal}ActionTypes.LOAD),
    switchMap(() =>
      this.${config.camel}Service.get${config.pascal}s()
        .pipe(
          map((${config.camel}s: ${config.pascal}[]) => new LoadSuccessAction(${config.camel}s)),
          catchError(error => of(new LoadFailAction(error)))
        )
    )
  );

  constructor(private actions$: Actions, private ${config.camel}Service: ${config.pascal}Service) {}
}
`;

  utils.writeToFile(config.path, `${config.name}.store.effects.ts`, text);
}

function createEffectsSpec() {
  const text = `import { empty } from 'rxjs/observable/empty';

import { ${config.pascal}Effects } from './${config.name}.store.effects';

describe('${config.pascal}Effects', function () {
  let effects: ${config.pascal}Effects;
  let actions$: any = empty();
  let ${config.camel}Service: any = { get: empty() };

  describe('constructor', function () {
    beforeEach(() => {
      effects = new ${config.pascal}Effects(actions$, ${config.camel}Service);
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
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

import { ${config.pascal}Service } from '../../services';

import { ${config.pascal}Effects } from './${config.name}.store.effects';
import { ${config.camel}Reducer } from './${config.name}.store.reducers';
import { ${config.pascal}StoreService } from './${config.name}.store.service';

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

export function ${config.camel}Reducer(state: ${config.pascal}StoreState = new ${config.pascal}StoreState(), action: ${config.pascal}Action) {
  let newState: ${config.pascal}StoreState;

  switch(action.type) {

    case ${config.pascal}ActionTypes.LOAD_FAIL:
      newState = new ${config.pascal}StoreState(Object.assign({}, state, {error: action.payload}));
      return newState;

    case ${config.pascal}ActionTypes.LOAD_SUCCESS:
      newState = new ${config.pascal}StoreState(Object.assign({}, state, {${config.camel}s: action.payload, error: ''}));
      return newState;

    case ${config.pascal}ActionTypes.LOAD:
    default:
      return state;
  }
}
`;

  utils.writeToFile(config.path, `${config.name}.store.reducers.ts`, text);
}

function createReducerSpec() {
  const text = `import { ${config.pascal}StoreState } from '../../models';

import { LoadFailAction, LoadSuccessAction } from './${config.name}.store.actions';
import { ${config.camel}Reducer } from './${config.name}.store.reducers';

describe('${config.camel}Reducer', function () {
  it('returns the given state by default', function () {
    const state = new ${config.pascal}StoreState();
    const expected: any = state;
    const result: any = ${config.camel}Reducer(state, {type: 'test'} as any);
    expect(result).toEqual(expected);
  });

  it('returns the state with the error added', function () {
    const error = 'test error';
    const state = new ${config.pascal}StoreState();
    const expected: any = new ${config.pascal}StoreState({error});
    const result: any = ${config.camel}Reducer(state, new LoadFailAction(error));
    expect(result).toEqual(expected);
  });

  it('returns the state with the payload added', function () {
    const ${config.camel}s = ['${config.camel}-1', '${config.camel}-2'];
    const state = new ${config.pascal}StoreState();
    const expected: any = new ${config.pascal}StoreState({${config.camel}s});
    const result: any = ${config.camel}Reducer(state, new LoadSuccessAction(${config.camel}s));
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

import { LoadAction, LoadFailAction, LoadSuccessAction } from './${config.name}.store.actions';
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

  dispatchLoadAction() {
    this.dispatchAction(new LoadAction());
  }

  dispatchLoadFailAction(payload: string) {
    this.dispatchAction(new LoadFailAction(payload));
  }

  dispatchLoadSuccessAction(payload: string[]) {
    this.dispatchAction(new LoadSuccessAction(payload));
  }
}
`;
  utils.writeToFile(config.path, `${config.name}.store.service.ts`, service);
}

function createServiceSpec() {
  const serviceSpec = `import { LoadAction, LoadFailAction, LoadSuccessAction } from './${config.name}.store.actions';
import { ${config.pascal}StoreService } from './${config.name}.store.service';

describe('${config.pascal}StoreService', function () {
  let service: ${config.pascal}StoreService;
  let store: any = {select: () => undefined};

  describe('constructor', function () {
    beforeEach(() => {
      service = new ${config.pascal}StoreService(store);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('get${config.pascal}s()', function () {
    beforeEach(() => {
      service = new ${config.pascal}StoreService(store);
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
      service = new ${config.pascal}StoreService(store);
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

  describe('dispatchLoadFailAction(payload: string)', function () {
    beforeEach(() => {
      service = new ${config.pascal}StoreService(store);
    });

    it('has a function named dispatchLoadFailAction', function () {
      expect(typeof service.dispatchLoadFailAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      const payload = 'test error';
      service.dispatchLoadFailAction(payload);
      expect(service.dispatchAction).toHaveBeenCalledWith(new LoadFailAction(payload));
    });
  });

  describe('dispatchLoadSuccessAction(payload: string)', function () {
    beforeEach(() => {
      service = new ${config.pascal}StoreService(store);
    });

    it('has a function named dispatchLoadSuccessAction', function () {
      expect(typeof service.dispatchLoadSuccessAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      const payload = ['test payload'];
      service.dispatchLoadSuccessAction(payload);
      expect(service.dispatchAction).toHaveBeenCalledWith(new LoadSuccessAction(payload));
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
