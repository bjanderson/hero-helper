const utils = require('./utils');

const config = utils.getConfig('test')

utils.createFolder(config.path);
