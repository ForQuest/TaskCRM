const PATHS = require('../paths');

module.exports = ({ limit = 100000 } = {}) => ({
  test: /\.(ttf|eot|svg|woff|woff2)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
  loader: 'url-loader',
  options: { mimetype: 'application/font', limit },
  include: PATHS.app
});

