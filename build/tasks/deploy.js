var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', ['delete-kendo-src'], function() {
  return gulp.src([
      './src/**/*.js',
      './src/**/*.html',
      './src/**/*.css',
      './styles/*.*',
      './images/*.*',
      './jspm_packages/**/*',
      '!./jspm_packages/kendo/bower-kendo-ui@*/src/**/*', // Do not remove this one!!
      '!./jspm_packages/kendo/bower-kendo-ui@*/js/**/*',
      '!./jspm_packages/github/aurelia-ui-toolkits/**/*',
      '!./jspm_packages/github/systemjs/**/*',
      '!./jspm_packages/github/showdownjs/**/*',
      '!./jspm_packages/github/PrismJS/**/*',
      '!./jspm_packages/github/jspm/**/*',
      '!./jspm_packages/npm/[aAc-eC-Eg-zG-Z]*/**/*', // exclude font-awesome
      './index.html',
      './favicon.ico',
      './config.js'
    ], { base: "." })
    // .pipe(gulp.dest('./dist')) // for debugging
    .pipe(ghPages());
});

gulp.task('delete-kendo-src', function () {
  return gulp.src(['./jspm_packages/kendo/bower-kendo-ui@*/src'])
    .pipe(vinylPaths(del));
});

gulp.task('deploy', function () {
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
