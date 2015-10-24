'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

// Downloads the selenium webdriver
gulp.task('webdriver-update', 'Download the selenium Webdriver', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', 'Download the selenium Standalone Webdriver', $.protractor.webdriver_standalone);

function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src(path.join(conf.paths.e2e, '/**/*.js'))
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

gulp.task('protractor', 'Run Protractor E2E tests', ['protractor:src']);
gulp.task('protractor:src', 'Run Protractor E2E tests on source code', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', 'Run Protractor E2E tests on distributed code', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
