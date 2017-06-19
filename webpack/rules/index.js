const image = require('./image');
const javascript = require('./javascript');
const css = require('./css');
const fonts = require('./fonts');

module.exports = ({ production = false, browser = false } = {}) => (
  [
    javascript({ production, browser }),
    css({ production, browser }),
    fonts(),
    image()
  ]
);
