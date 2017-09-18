// gulpfile.js

// Define variables.
var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var cleancss     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var del          = require('del');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var imagemin     = require('gulp-imagemin');
var notify       = require('gulp-notify');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var run          = require('gulp-run');
var runSequence  = require('run-sequence');
var sass         = require('gulp-ruby-sass');
var uglify       = require('gulp-uglify');

// Include paths file.
var paths = require('./_assets/gulp_config/paths');

// Use Sass compiler to process styles, adds vendor prefixes, minifies etc and outputs for the appropriate locations
gulp.task('build:styles:main', function(){
  return sass (paths.sassFiles + '/main.scss', {
    style: 'compressed',
    trace: true,
    loadPath: [paths.sassFiles]
  }).pipe(postcss([ autoprefixer({
      browsers: ['last 2 versions']}
      )]
  ))
  .pipe(cleancss())
  .pipe(gulp.dest(paths.jekyllCssFiles))
  .pipe(gulp.dest(paths.siteCssFiles))
  .pipe(browserSync.stream())
  .on('error', gutil.log)
});

gulp.task('build:styles:critical', function(){
  return sass (paths.sassFiles + '/main.scss', {
    style: 'compressed',
    trace: true,
    loadPath: [paths.sassFiles]
  }).pipe(postcss([ autoprefixer({
      browsers: ['last 2 versions']}
      )]
  ))
  .pipe(cleancss())
  .pipe(gulp.dest('_includes/css'))
  .on('error', gutil.log)
});

// Builds all styles.
gulp.task('build:styles', ['build:styles:main', 'build:styles:critical']);

// Processes JS.
gulp.task('build:scripts', function() {
  // Concatenate and uglify JS.
});

// Optimizes images.
gulp.task('build:images', function() {
  // Run imagemin.
});

// Runs jekyll build command.
gulp.task('build:jekyll', function() {
    var shellCommand = 'bundle exec jekyll build --config _config.yml';

    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log);
});

// Deletes the entire _site directory.
gulp.task('clean:jekyll', function(callback) {
    del(['_site']);
    callback();
});

// Main clean task.
// Deletes _site directory and processed assets.
gulp.task('clean', ['clean:jekyll']);

// Builds site anew.
gulp.task('build', function(callback) {
    runSequence('clean', ['build:styles'],
        'build:jekyll',
        callback);
});

// Default Task: builds site.
gulp.task('default', ['build']);

// Special tasks for building and then reloading BrowserSync.
gulp.task('build:jekyll:watch', ['build:jekyll'], function(callback) {
    browserSync.reload();
    callback();
});

// Serves site and watches files...
gulp.task('serve', ['build'], function() {

  browserSync.init({
      server: paths.siteDir,
      ghostMode: false, // Toggle to mirror clicks, reloads etc. (performance)
      logFileChanges: true,
      logLevel: 'debug',
      open: true        // Toggle to automatically open page when starting.
  });

  // Watch site settings.
  gulp.watch(['_config.yml'], ['build:jekyll:watch']);

  // Watch site settings.
  gulp.watch(['_data'], ['build:jekyll:watch']);

  // Watch .scss files; changes are piped to browserSync.
  gulp.watch('_assets/css/**/*.scss', ['build:styles', 'build:jekyll:watch']);

  // Watch html and markdown files.
  gulp.watch(['**/*.html', '!_site/**/*.*'], ['build:jekyll:watch']);



});
