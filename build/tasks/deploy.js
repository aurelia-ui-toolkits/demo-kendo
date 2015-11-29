var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');

gulp.task('deploy-gh-pages', function() {
  return gulp.src([
      './dist/app-build.js',
      './styles/styles.css',
      './jspm_packages/system.js',
      './index.html',
      './favicon.ico',
      './config.js'
    ], { base: "." })
    .pipe(ghPages());
});


gulp.task('deploy', function () {
  return runSequence(
    'build',
    'bundle',
    'deploy-gh-pages',
    'unbundle',
    'clean'
  );
});
