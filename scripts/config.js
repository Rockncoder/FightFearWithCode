(function () {
  'use strict';

  angular.module('todoApp').config(MyConfig);
  MyConfig.$inject = ['localStorageServiceProvider'];

  function MyConfig(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }

}());
