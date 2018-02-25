const utils = require('./utils');

const config = utils.getConfig('models');
utils.createFolder(config.path);

createModel();
createModelSpec();
createIndexTs();
addToModelsIndex();

console.log(`\n${config.pascal} model created successfully.\n`);

function createModel() {
  const text = `import { Utils } from '../utils';

export class ${config.pascal} {

  value: string;

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.value = Utils.getString(obj.value);
  }
}
`;

  utils.writeToFile(config.path, `${config.name}.model.ts`, text);
}

function createModelSpec() {
  const text = `import { ${config.pascal} } from './${config.name}.model';

function testDefaults(obj: any) {
  expect(obj.value).toEqual('');
}

describe('models', function () {
  describe('${config.pascal}', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        const obj = new ${config.pascal}();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        const obj = new ${config.pascal}({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        const obj = {
          value: 'test string 1'
        };

        const test = new ${config.pascal}(obj);

        for (const field of Object.keys(obj)) {
          expect(test[field]).toEqual(obj[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        const test = new ${config.pascal}();
        expect(Object.keys(test)).toEqual([
          'value'
        ]);
      });
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
