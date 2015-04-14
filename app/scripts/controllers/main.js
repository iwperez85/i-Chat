'use strict';

/**
 * @ngdoc function
 * @name iChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iChatApp
 */
angular.module('iChatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
