const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImports = require('postcss-import');
const postcssUrl = require('postcss-url');

const paths = require('../paths');

const deployUrl = "";
const maximumInlineSize = 10;
const minimizeCss = false;

const postcssPlugins = function (loader) {
  // safe settings based on: https://github.com/ben-eb/cssnano/issues/358#issuecomment-283696193
  const importantCommentRe = /@preserve|@licen[cs]e|[@#]\s*source(?:Mapping)?URL|^!/i;

  const minimizeOptions = {
    autoprefixer: false,
    discardComments: { remove: (comment) => !importantCommentRe.test(comment) },
    mergeLonghand: false,
    safe: true
  };

  let imports = postcssImports({
    resolve: (url, context) => {
      return new Promise((resolve, reject) => {
        if (url && url.startsWith('~')) {
          url = url.substr(1);
        }

        loader.resolve(context, url, (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
    },

    load: (filename) => {
      return new Promise((resolve, reject) => {
        loader.fs.readFile(filename, (err, data) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(data.toString());
        });
      });
    }
  });

  let url1 = postcssUrl({
    filter: ({ url }) => url.startsWith('~'),
    url: ({ url }) => {
      const fullPath = path.join(paths.projectRoot, 'node_modules', url.substr(1));
      return path.relative(loader.context, fullPath).replace(/\\/g, '/');
    }
  });

  let url2 = postcssUrl([
    {
      // Only convert root relative URLs, which CSS-Loader won't process into require().
      filter: ({ url }) => url.startsWith('/') && !url.startsWith('//'),
      url: ({ url }) => {
        if (deployUrl.match(/:\/\//) || deployUrl.startsWith('/')) {
          // If deployUrl is absolute or root relative, ignore baseHref & use deployUrl as is.
          return `${deployUrl.replace(/\/$/, '')}${url}`;
        } else if (baseHref.match(/:\/\//)) {
          // If baseHref contains a scheme, include it as is.
          return baseHref.replace(/\/$/, '') + `/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
        } else {
          // Join together base-href, deploy-url and the original URL.
          // Also dedupe multiple slashes into single ones.
          return `/${baseHref}/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
        }
      }
    },

    {
      // TODO: inline .cur if not supporting IE (use browserslist to check)
      filter: (asset) => {
        return maximumInlineSize > 0 && !asset.hash && !asset.absolutePath.endsWith('.cur');
      },
      url: 'inline',
      // NOTE: maxSize is in KB
      maxSize: maximumInlineSize,
      fallback: 'rebase',
    },

    { url: 'rebase' }
  ]);

  let config = [
    imports,
    url1,
    url2,
    autoprefixer(),
  ];

  config = config.concat(minimizeCss ? [cssnano(minimizeOptions)] : []);

  return config;
};

module.exports = postcssPlugins;
