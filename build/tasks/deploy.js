var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', function() {
  return gulp.src([
      './dist/app-build.js',
      './styles/*.*',
      './images/*.*',
      './jspm_packages/system.js',
      './jspm_packages/github/twbs/bootstrap@3.3.6/fonts/*',
      './jspm_packages/npm/font-awesome@4.4.0/**/*',
      './jspm_packages/kendo/bower-kendo-ui@2015.3.1201/styles/**/*',
      './jspm_packages/npm/font-awesome@4.4.0/*',
      './index.html',
      './favicon.ico',
      './config.js'
    ], { base: "." })
    .pipe(ghPages());
});
//
// gulp.task('copy-kendo-images', function () {
//    return gulp.src([
//        './jspm_packages/kendo/bower-kendo-ui@2015.2.813/styles/Bootstrap/*.*'
//    ], {base: "./jspm_packages/kendo/bower-kendo-ui@2015.2.813/styles/"})
//    .pipe(gulp.dest('.'));
// });
//
// gulp.task('clean-kendo-images', function () {
//   return gulp.src('./Bootstrap')
//     .pipe(vinylPaths(del));
// });

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
