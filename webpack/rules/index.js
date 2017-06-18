const image = require('./image');
const javascript = require('./javascript');
const css = require('./css');
const fonts = require('./fonts');
const fonts_out = fonts();

module.exports = ({ production = false, browser = false } = {}) => (
  [
    javascript({ production, browser }),
    css({ production, browser }),
    fonts(),
    image()
  ]
);
