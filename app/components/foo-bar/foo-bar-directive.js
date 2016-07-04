'use strict';

angular.module('fooBar')
  .directive('fooBar', function ($log, config) {
    $log.log(config);
    return {
      restrict: 'E',
      templateUrl: 'foo-bar/foo-bar.html'
    };
  });
