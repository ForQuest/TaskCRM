const PATHS = require('../paths');

module.exports = ({ limit = 100000 } = {}) => ([
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader',
    options: { mimetype: 'application/font-woff', limit },
    include: PATHS.app
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
    options: { limit },
    include: PATHS.app
  }
]);

