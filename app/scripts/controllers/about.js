'use strict';

/**
 * @ngdoc function
 * @name i-ChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the i-ChatApp
 */
angular.module('i-ChatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
