const AngularNamedLazyChunksWebpackPlugin = require('angular-named-lazy-chunks-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const {
  ContextReplacementPlugin,
  DefinePlugin,
  NamedModulesPlugin,
  NoEmitOnErrorsPlugin,
  SourceMapDevToolPlugin
} = require('webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;

const paths = require('../paths');

const METADATA = require('./metadata');

const entryPoints = [
  'inline',
  'polyfills',
  'sw-register',
  'styles',
  'vendor',
  'main'
];

const plugins = [];

const angularCompilerPlugin = new AngularCompilerPlugin({
  compilerOptions: {},
  mainPath: 'main.ts',
  platform: 0,
  skipCodeGeneration: true,
  sourceMap: true,
  tsConfigPath: 'src/tsconfig.app.json'
});
plugins.push(angularCompilerPlugin);

const angularNamedLazyChunksWebpackPlugin = new AngularNamedLazyChunksWebpackPlugin()
plugins.push(angularNamedLazyChunksWebpackPlugin);

const baseHrefWebpackPlugin = new BaseHrefWebpackPlugin({});
plugins.push(baseHrefWebpackPlugin);

const commonsChunkPluginInline = new CommonsChunkPlugin({
  minChunks: null,
  name: [ 'inline' ]
});
plugins.push(commonsChunkPluginInline);

const commonsChunkPluginMain = new CommonsChunkPlugin({
  async: 'common',
  minChunks: 2,
  name: [ 'main' ]
});
plugins.push(commonsChunkPluginMain);

const commonsChunkPluginVendor = new CommonsChunkPlugin({
  chunks: [ 'main' ],
  minChunks: (module) => {
    return module.resource
      && (module.resource.startsWith(paths.nodeModules)
        || module.resource.startsWith(paths.genDirNodeModules));
  },
  name: [ 'vendor' ]
});
plugins.push(commonsChunkPluginVendor);

const contextReplacementPlugin = new ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, paths.src, {} );
plugins.push(contextReplacementPlugin);

const circularDependencyPlugin = new CircularDependencyPlugin({
  cwd: paths.projectRoot,
  exclude: /(\\|\/)node_modules(\\|\/)/,
  failOnError: false,
  onDetected: false
});
plugins.push(circularDependencyPlugin);

const copyWebpackPlugin = new CopyWebpackPlugin([
    {
      context: 'src',
      to: '',
      from: {
        glob: paths.assets + '/**/*',
        dot: true
      }
    },

    {
      context: 'src',
      to: '',
      from: {
        glob: paths.favicon,
        dot: true
      }
    }
  ],

  {
    debug: 'warning',
    ignore: [
      '.gitkeep',
      '**/.DS_Store',
      '**/Thumbs.db'
    ]
  });
plugins.push(copyWebpackPlugin);

// NOTE: when adding more properties make sure you include them in typings.d.ts
const definePlugin = new DefinePlugin({
  'APP_METADATA': {
    'ENV': JSON.stringify(METADATA.ENV),
    'VERSION': JSON.stringify(METADATA.VERSION)
  }
});
plugins.push(definePlugin);

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  cache: true,
  chunks: 'all',
  chunksSortMode: function sort(left, right) {
    let leftIndex = entryPoints.indexOf(left.names[0]);
    let rightIndex = entryPoints.indexOf(right.names[0]);
    if (leftIndex > rightIndex) {
      return 1;
    }
    else if (leftIndex < rightIndex) {
      return -1;
    }
    else {
      return 0;
    }
  },
  compile: true,
  excludeChunks: [],
  favicon: false,
  filename: './index.html',
  hash: false,
  inject: true,
  minify: false,
  showErrors: true,
  template: paths.htmlIndex,
  title: 'Webpack App',
  xhtml: true
});
plugins.push(htmlWebpackPlugin);

const namedModulesPlugin = new NamedModulesPlugin({});
plugins.push(namedModulesPlugin);

const noEmitOnErrorsPlugin = new NoEmitOnErrorsPlugin();
plugins.push(noEmitOnErrorsPlugin);

const progressPlugin = new ProgressPlugin();
plugins.push(progressPlugin);

const sourceMapDevToolPlugin = new SourceMapDevToolPlugin({
  fallbackModuleFilenameTemplate: '[resource-path]?[hash]',
  filename: '[file].map[query]',
  moduleFilenameTemplate: '[resource-path]',
  sourceRoot: 'webpack:///'
});
plugins.push(sourceMapDevToolPlugin);

module.exports = plugins;
