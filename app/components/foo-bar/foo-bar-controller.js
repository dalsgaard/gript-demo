'use strict';

angular.module('fooBar')
  .controller('FooBarController', function ($log) {
    var vm = this;
    $log.log('FooBarController');
    vm.foo = function () {
      return 42;
    };
  });
