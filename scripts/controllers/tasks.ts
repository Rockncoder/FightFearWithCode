(function () {
  'use strict';

  angular.module('todoApp').controller('TasksController', TasksController);
  TasksController.$inject = ['localStorageService'];

  function TasksController(localStorageService) {
    var vm = this;

    var tasksConstant = 'tasks';
    var tasksStorage = localStorageService.get(tasksConstant);
    vm.tasks = tasksStorage || [];

    vm.addTask = function () {
      vm.tasks.push(vm.task);
      vm.task = '';
      localStorageService.set(tasksConstant, vm.tasks);
    };

    vm.removeTask = function (index) {
      vm.tasks.splice(index, 1);
      localStorageService.set(tasksConstant, vm.tasks);
    };
  }

}());
