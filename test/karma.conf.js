'use strict';

module.exports = function (config) {

  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jquery/dist/jquery.js',
      'src/{,*/}*.js',
      'src/{,*/}/test/*.spec.js'
    ],
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: true
  });

};
