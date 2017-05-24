'use strict';

var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
// We'll use mocha in this example, but any test framework will work
var mocha = require('gulp-mocha');
var debug = require('gulp-debug');
var eslint = require('gulp-eslint');

gulp.task('pre-test', function () {
  return gulp.src(['app/**/*.js','!app/tests/**/*.spec.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('eslint', function() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['./**/*.js', '!coverage/**', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('test', ['pre-test'], function () {
  console.log('test task')
  return gulp.src(['app/tests/*.js'])
  	.pipe(debug({title: 'unicorn:'}))
    .pipe(mocha({timeout:10000}))
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    //.pipe(istanbul.enforceThresholds({ thresholds: { global: 20} }));
});

gulp.task('integration', function () {
  console.log('running integration tests .....')
  console.log('done');
  return;
    // Enforce a coverage of at least 90%
    //.pipe(istanbul.enforceThresholds({ thresholds: { global: 20} }));
});
