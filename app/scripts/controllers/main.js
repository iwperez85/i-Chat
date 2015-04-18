'use strict';

/**
 * @ngdoc function
 * @name i-ChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the i-ChatApp
 */
angular.module('i-ChatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
