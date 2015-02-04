
var path = require('path');
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var AssemblyLine = require('assembly-line');

var config = {
  factory: {
    verbose: true
  },
  config: {
    'ng-component-machinery': {
      test: {
        unit: path.resolve(__dirname, './test/karma.conf.js')
      }
    }
  }
};

var line = new AssemblyLine(config);

line.run();

////

gulp.task('default', ['build']);


gulp.task('build', function (cb) {
  runSequence([
    'ng-component-machinery:build'
  ], cb);
});

gulp.task('lint', function (cb) {
  runSequence([
    'ng-component-machinery:src/jshint',
    'ng-component-machinery:test/jshint'
  ], cb);
});
