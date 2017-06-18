const PATHS = require('../paths');

module.exports = ({ limit = 10000 } = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg)$/,
  loader: 'url-loader',
  options: { name: '[hash].[ext]', limit },
  include: PATHS.app
});

