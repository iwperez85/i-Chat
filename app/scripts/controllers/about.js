'use strict';

/**
 * @ngdoc function
 * @name iChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iChatApp
 */
angular.module('iChatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
