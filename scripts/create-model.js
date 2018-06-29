const utils = require('./utils');

const config = utils.getConfig('models');
utils.createFolder(config.path);

createModel();
createModelSpec();
createIndexTs();
addToModelsIndex();

console.log(`\n${config.pascal} model created successfully.\n`);

function createModel() {
  const text = `import { getObject, getString } from '../../utils';

export class ${config.pascal} {

  value: string;

  constructor(obj?: Partial<${config.pascal}>) {
    obj = getObject(obj);
    this.value = getString(obj.value);
  }
}
`;

  utils.writeToFile(config.path, `${config.name}.model.ts`, text);
}

function createModelSpec() {
  const text = `import { defaultString } from '../../utils';
import { hasExpectedFieldsAndValues } from '../../utils/test';

import { ${config.pascal} } from './${config.name}.model';

describe('${config.pascal}', function () {
  describe('constructor defaults', function () {
    const defaults = {
      value: defaultString
    };

    it('should set the default values when given no input object', function () {
      expect(hasExpectedFieldsAndValues(defaults, new ${config.pascal}())).toEqual(true);
    });

    it('should set the default values when given null', function () {
      expect(hasExpectedFieldsAndValues(defaults, new ${config.pascal}())).toEqual(true);
    });
  });

  describe('constructor assignments', function () {
    it('should set all fields as passed into the constructor object', function () {
      const test = {
        value: 'test value'
      };

      expect(hasExpectedFieldsAndValues(test, new ${config.pascal}(test))).toEqual(true);
    });
  });
});
`;

  utils.writeToFile(config.path, `${config.name}.model.spec.ts`, text);
}

function createIndexTs() {
  const text = `export * from './${config.name}.model';
`;

  utils.writeToFile(config.path, `index.ts`, text);
}

function addToModelsIndex() {
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
