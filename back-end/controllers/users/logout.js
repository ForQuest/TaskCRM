/**
 * Module dependencies.
 */

var log            = require('../../libs/log')(module);
var config         = require('nconf');

// End of dependencies.


module.exports = function(req, res) {
  req.logout();
  res.redirect('/');
};