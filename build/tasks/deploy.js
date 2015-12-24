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
    './jspm_packages/*.js', // include system.js
    './jspm_packages/github/twbs/bootstrap@*/fonts/*',
    './jspm_packages/npm/font-awesome@*/**/*',
    './jspm_packages/kendo/bower-kendo-ui@*/styles/**/*',
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
    'build',
    'bundle',
    // 'copy-kendo-images',
    'deploy-gh-pages',
    // 'clean-kendo-images',
    'unbundle',
    'clean'
  );
});
