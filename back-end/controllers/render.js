/**
 * Module dependencies.
 */

var log            = require('../libs/log')(module);
var config         = require('nconf');

// End of dependencies.

module.exports = function(template, variables) {
  return function (req, res) {
    res.render(template, variables);
  };
};