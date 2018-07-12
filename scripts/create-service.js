
const utils = require('./utils');

const config = utils.getConfig('services');

utils.createFolder(config.path);

createService();
createServiceSpec();
createIndex();
// addToServicesIndex();

console.log(`\n${config.pascal} service created successfully.\n`);

function createService() {
  const text = `import { Injectable } from '@angular/core';

import { ApiService } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ${config.pascal}Service {

  url = '';

  constructor(private api: ApiService) {}

  get() {
    return this.api.get(this.url);
  }
}
`;

  utils.writeToFile(config.path, `${config.name}.service.ts`, text);
}

function createServiceSpec() {
  const text = `import { ${config.pascal}Service } from './${config.name}.service';

describe('${config.pascal}Service', function () {
  let service: ${config.pascal}Service;
  let api: any = { get: () => undefined };

  function init() {
    service = new ${config.pascal}Service(api);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('get', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named get', function () {
      expect(typeof service.get).toEqual('function');
    });

    it('calls api.get()', function () {
      spyOn(api, 'get').and.returnValue(null);
      service.get();
      expect(api.get).toHaveBeenCalled();
    });
  });
});
`;

  utils.writeToFile(config.path, `${config.name}.service.spec.ts`, text);
}

function createIndex() {
  const text = `export * from './${config.name}.service';\n`;
  utils.writeToFile(config.path, `index.ts`, text);
}

function addToServicesIndex() {
  let servicesIndex = utils.readFromFile(config.path, '../index.ts');
  let names = utils.parseImports(servicesIndex);
  if (names.indexOf(config.name) === -1) {
    names.push(config.name);
  }
  names.sort(function (a, b) { return a.localeCompare(b); });

  let text = '';
  for (let name of names) {
    text += `export * from './${name}';\n`;
  }

  utils.writeToFile(config.path, `../index.ts`, text);
}
