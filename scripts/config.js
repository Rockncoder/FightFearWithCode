(function () {
  'use strict';

  angular.module('todoApp').config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }]);

}());
