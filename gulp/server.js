'use strict';

/*var express = require('express');
*/var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var routes = require('./api/routes');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
   */
//  server.middleware = proxyMiddleware('/api/search', {target: 'http://localhost:4000', proxyHost: 'localhost:4000'});
  server.middleware = proxyMiddleware('/api', {target: 'http://localhost:8000'});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', 'Run Dev server with source code', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
  routes.api();
});

gulp.task('serve:dist', 'Run Dev server with distributed code', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', 'Run Dev server for End-to-End tests', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', 'Run Dev server for End-to-End tests using distributed code ', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
