var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
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
