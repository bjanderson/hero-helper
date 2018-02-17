
const devServer = {
  historyApiFallback: true,
  proxy: {
    '/api': 'http://localhost:3001'
  },
  noInfo: true,
  stats: 'errors-only'
};

module.exports = devServer;
