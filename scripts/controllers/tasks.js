app.controller('TasksController', function ($scope, localStorageService) {
    var tasksConstant = 'tasks';
    var tasksStorage = localStorageService.get(tasksConstant);
    $scope.tasks = tasksStorage || [];

    $scope.addTask = function () {
      $scope.tasks.push($scope.task);
      $scope.task = '';
      localStorageService.set(tasksConstant, $scope.tasks);
    };

    $scope.removeTask = function (index) {
      $scope.tasks.splice(index, 1);
      localStorageService.set(tasksConstant, $scope.tasks);
    };
  });
