(function () {
  'use strict';

  angular.module('todoApp').config(MyRoute);
  MyRoute.$inject =  ['$routeProvider'];

  function MyRoute($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksController as tc'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}());
