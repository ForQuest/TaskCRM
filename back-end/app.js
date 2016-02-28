#!/bin/env node

/**
 * Module dependencies.
 */

var log         = require('./libs/log')(module);
var config      = require('nconf');

var express     = require('express');
var bootable    = require('bootable');
var bootableEnv = require('bootable-environment');

// End of dependencies.

var ip  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8000;

var app = bootable(express());

// Setup initializers
app.phase(bootable.initializers('setup/init/'));

// Setup environments
app.phase(bootableEnv('setup/env/', app));

// Setup routes
app.phase(bootable.routes('routes/', app));

// Boot app
app.boot(function(err) {
  if (err) { throw err; }
  app.listen(port, ip, function() {
    log.info('Express listen ', ip+':'+port);
  });
});