'use strict';

/**
 * Module dependencies.
 */
var config    = require('nconf');
var log       = require('../../libs/log')(module);
var path      = require('path');

// end of dependencies.


module.exports = function() {
  // Setup nconf
  config.argv()
		    .env()
		    .file({'file': './configs.json'});
};
