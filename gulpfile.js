var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
// We'll use mocha in this example, but any test framework will work
var mocha = require('gulp-mocha');
var debug = require('gulp-debug');

gulp.task('pre-test', function () {
  return gulp.src(['app/**/*.js','!app/tests/**/*.spec.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
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
