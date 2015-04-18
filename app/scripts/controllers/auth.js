'use strict';

/**
 * @ngdoc function
 * @name i-ChatApp.controller:AuthcontrollerCtrl
 * @description
 * # AuthcontrollerCtrl
 * Controller of the i-ChatApp
 */
angular.module('i-ChatApp')
.controller('AuthCtrl', function ($scope, $location, $modal, $rootScope, $cookies) {
  console.log($cookies);
  if (!$rootScope.username) {
    showUsernameModal();
  }

  // must take care of validation
  function showUsernameModal () {
    var modalInstance = $modal.open({
      templateUrl: '/views/usernamemodal.html',
      controller: function ($rootScope, $scope, $modalInstance) {

        $scope.errors = [];

        $scope.ok = function () {
          if (angular.isUndefined($scope.username) || $scope.username.length <= 0) {
            $scope.errors.push('You must set a username');
            return;
          }

          $rootScope.username = $scope.username;
          $cookies.username = $scope.username;
            $modalInstance.close();
            $location.path('/');
        };
      }
    });
  }
});
