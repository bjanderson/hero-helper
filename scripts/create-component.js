const utils = require('./utils');

const config = utils.getConfig('components');

utils.createFolder(config.path);

createComponent();
createComponentSpec();
// createComponentE2e();
if (config.isModule) {
  createModule();
}
createHtml();
createScss();
createIndex();

console.log(`\n${config.pascal} component created successfully.\n`)

function createComponent() {
  let text = `import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'prefix-${config.name}',
  styleUrls: ['./${config.name}.component.scss'],
  templateUrl: './${config.name}.component.html'
})
export class ${config.pascal}Component {
  constructor() {}
}
`;
  utils.writeToFile(config.path, `${config.name}.component.ts`, text);
}

function createComponentSpec() {
  let text = `import { ${config.pascal}Component } from './${config.name}.component';

describe('${config.pascal}Component', function () {
  let component;

  function init() {
    component = new ${config.pascal}Component();
  }

  describe('constructor()', function () {
    beforeEach(function () {
      init();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
`;
  utils.writeToFile(config.path, `${config.name}.component.spec.ts`, text);
}

function createComponentE2e() {
  let text = `/*import { browser, by, element } from 'protractor';

describe('${config.pascal}Component', function () {
  beforeEach(function () {
    browser.get('/#/ops/${config.name.replace(/-/g, '_')}');
  });

  it('should have a h1#title element with the value of ${config.pascal}', function (done) {
    let expected = '${config.pascal}';
    element(by.css('#${config.name.replace(/-/g, '_')}')).getText().then(function (result) {
      expect(result).toBe(expected);
      done();
    });
  });
});*/`;
  utils.writeToFile(config.path, `${config.name}.component.e2e.ts`, text);
}

function createModule() {
  let text = `import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';`;

  if (config.hasRoute) {
    text += '\nimport { RouterModule, Routes } from \'@angular/router\';';
  }

  text += `

import { ${config.pascal}Component } from './${config.name}.component';`;

if(config.hasRoute) {
  text += `\n\nexport const routes: Routes = [{
  path: '',
  component: ${config.pascal}Component
}];`;
}

text += `

@NgModule({
  declarations: [
    ${config.pascal}Component
  ],

  exports: [
    ${config.pascal}Component
  ],

  imports: [
    CommonModule`;

    if(config.hasRoute) {
      text += `,
    RouterModule.forChild(routes)`;
    }

    text += `
  ]
})
export class ${config.pascal}Module {}
`;
  utils.writeToFile(config.path, `${config.name}.module.ts`, text);
}

function createHtml() {
  let text = `<div class="${config.name}">\n  ${config.title} Component\n</div>\n`;
  utils.writeToFile(config.path, `${config.name}.component.html`, text);
}

function createScss() {
  let text = `:host {
  .${config.name} {

  }
}
`;
  utils.writeToFile(config.path, `${config.name}.component.scss`, text);
}

function createIndex() {
  let text = `export * from './${config.name}.component';\n`

  if (config.isModule) {
    text +=`export * from './${config.name}.module';\n`
  }

  utils.writeToFile(config.path, `index.ts`, text);
}
