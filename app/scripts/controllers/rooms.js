'use strict';

/**
 * @ngdoc function
 * @name i-ChatApp.controller:RoomsCtrl
 * @description
 * # RoomsCtrl
 * Controller of the i-ChatApp
 */
angular.module('i-ChatApp')
.controller('RoomsCtrl', function ($scope, $modal, $rootScope, Room, Message) {
  $scope.rooms = Room.all;
});
 
