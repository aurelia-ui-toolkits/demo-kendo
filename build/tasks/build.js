var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require("gulp-notify");
var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');
var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

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

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src(['./src/app-build-*.js', './src/kendo-*.js'])
    .pipe(vinylPaths(del));
});

gulp.task('deploy-gh-pages', function() {
  return gulp.src([
    './src/**/*',
    './kendo-sdk/**/*',
    './styles/*.*',
    './images/*.*',
    './doc/*.*',
    './jspm_packages/*.js', // include system.js
    './jspm_packages/github/twbs/bootstrap@*/fonts/*',
    './jspm_packages/npm/font-awesome@*/**/*',
    './jspm_packages/npm/font-awesome*.js',
    './jspm_packages/github/PrismJS/prism*/themes/*.css',
    './jspm_packages/github/google/code-prettify*/**/*',
    './jspm_packages/npm/babel-runtime*/**/*',
    "./jspm_packages/npm/showdown-prettify@1.3.0.js",
    "./jspm_packages/npm/showdown-prettify@1.3.0/**/*",
    "./jspm_packages/npm/showdown@1.9.1.js",
    "./jspm_packages/npm/showdown@1.9.1/**/*",
    './index.html',
    './favicon.ico',
    './config.js'
  ], { base: '.' })
    // .pipe(gulp.dest('./dist')) // for debugging
    .pipe(ghPages());
});

gulp.task('deploy', gulp.series(
  'clean',
  'unbundle',
  'bundle',
  'deploy-gh-pages',
  'unbundle',
  'clean')
);

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules: 'system'})))
    .pipe(sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed json files to the output directory
gulp.task('build-json', function() {
  return gulp.src(paths.json)
    .pipe(changed(paths.output, {extension: '.json'}))
    .pipe(gulp.dest(paths.output));
});


// copies changed css files to the output directory
gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('build-system', 'build-html', 'build-css', 'build-json')));


  
// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', gulp.series('serve'));
