var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');

var config = {
  force: true,
  packagePath: '.',
  configPath: 'config.js',
  injectionConfigPath: 'config.js',
  bundles: bundles.bundles
};

gulp.task('bundle', function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});
