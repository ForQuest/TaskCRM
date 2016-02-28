var log         = require('../../libs/log')(module);
var config      = require('nconf');

var mongoose    = require('mongoose');
var requireTree = require('require-tree');
var models      = requireTree('../../models/');


module.exports = function(done) {

  mongoose.connection.on('open', function() {
    log.info('Connected to mongo server!');
    return done();
  });

  mongoose.connection.on('error', function(err) {
    log.error('Could not connect to mongo server!');
    log.error(err.message);
    return done(err);
  });

  try {
    mongoose.connect(config.get('mongoose:db'));
    log.info('Started connection on ' + (config.get('mongoose:db')) + ', waiting for it to open...');
  } catch (err) {
    log.error(('Setting up failed to connect to ' + config.get('mongoose:db')), err.message);
    done(err);
  }

};
