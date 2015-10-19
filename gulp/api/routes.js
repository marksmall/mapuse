'use strict';

var api = require('./api');

module.exports = function(app) {
  app.get('/api/search', api.search);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
};