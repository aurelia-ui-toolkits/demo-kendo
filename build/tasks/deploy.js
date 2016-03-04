var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', ['delete-kendo-src'], function() {
  return gulp.src([
    './src/**/*',
    './styles/*.*',
    './images/*.*',
    './doc/*.*',
    './jspm_packages/*.js', // include system.js
    './jspm_packages/github/twbs/bootstrap@*/fonts/*',
    './jspm_packages/npm/font-awesome@*/**/*',
    './jspm_packages/npm/font-awesome*.js',
    './jspm_packages/kendo/bower-kendo-ui@*/styles/**/*',
    './jspm_packages/kendo/bower-kendo-ui@*/js/kendo.spreadsheet.min.js',
    // '!./jspm_packages/kendo/bower-kendo-ui@*/js/kendo.all.min.js',
    // '!./jspm_packages/kendo/bower-kendo-ui@*/js/kendo.web.min.js',
    // '!./jspm_packages/kendo/bower-kendo-ui@*/js/kendo.dataviz.min.js',
    // '!./jspm_packages/kendo/bower-kendo-ui@*/js/kendo.dataviz.mobile.min.js',
    // '!./jspm_packages/kendo/bower-kendo-ui@*/js/kendo.mobile.min.js',
    './jspm_packages/github/PrismJS/prism*/themes/*.css',
    './jspm_packages/github/google/code-prettify*/loader/**/*',
    './jspm_packages/npm/babel-runtime*/**/*',
    './index.html',
    './favicon.ico',
    './config.js'
  ], { base: '.' })
    // .pipe(gulp.dest('./dist')) // for debugging
    .pipe(ghPages());
});

gulp.task('delete-kendo-src', function() {
  return gulp.src(['./jspm_packages/kendo/bower-kendo-ui@*/src'])
    .pipe(vinylPaths(del));
});

gulp.task('deploy', function() {
  return runSequence(
    'clean',
    'unbundle',
    'bundle',
    // 'copy-kendo-images',
    'deploy-gh-pages',
    // 'clean-kendo-images',
    'unbundle',
    'clean'
  );
});
