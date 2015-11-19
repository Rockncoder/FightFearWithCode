(function () {
    'use strict';
    angular.module('todoApp').controller('HeaderController', HeaderController);
    HeaderController.$inject = ['$scope', '$location'];
    function HeaderController($scope, $location) {
        var vm = this;
        vm.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }
}());
//# sourceMappingURL=header.js.map