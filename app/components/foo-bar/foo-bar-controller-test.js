'use strict';

describe('FooBarController', function () {
  var $controller;
  var ctrl;

  beforeEach(module('fooBar'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  beforeEach(function () {
    ctrl = $controller('FooBarController');
  });

  it('should ...', function () {
    var foo = ctrl.foo();
    expect(foo).toEqual(42);
  });

});
