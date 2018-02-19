/* const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    /* if (src.match(/scss/)) {
      console.log('src: ', src);
    } * /
    if (path.match(/\.[css|less|scss]/)) {
      return '';
    } else if (path.endsWith('.ts')) {
      return tsc.transpile(
        src,
        tsConfig.compilerOptions,
        path,
        []
      );
    }
    return src;
  },
};
 */

const process = require('ts-jest/preprocessor.js').process;
const TEMPLATE_URL_REGEX = /templateUrl:\s*('|")(\.\/){0,}(.*)('|")/g;
const STYLE_URLS_REGEX = /styleUrls:\s*\[\s*((?:'|").*\s*(?:'|")).*\s*.*\]/g;
const STYLES_REGEX = /styles:\s*\[(require\()\s*((?:'|").*\s*(?:'|")).*\s*.*\)]/g;
const ESCAPE_TEMPLATE_REGEX = /(\${|\`)/g;

module.exports.process = (src, path, config, transformOptions) => {
  if (path.endsWith('.html')) {
    src = src.replace(ESCAPE_TEMPLATE_REGEX, '\\$1');
  }
  src = src
    .replace(TEMPLATE_URL_REGEX, 'template: require($1./$3$4)')
    .replace(STYLE_URLS_REGEX, 'styles: []')
    .replace(STYLES_REGEX, 'styles: []');
  return process(src, path, config, transformOptions);
};
