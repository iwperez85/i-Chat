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

  $scope.create = function () {
    showCreateRoomModal();  
  };

  $scope.setCurrentRoom = function (room) {
    $scope.currentRoom = room;
  };

  $scope.hasCurrentRoom = function (room) {
    return $scope.currentRoom;
  };

  $scope.isCurrent = function (room) {
    return $scope.currentRoom && $scope.currentRoom.$id === room.$id;
  };

  $scope.sendMessage = function () {
    var message = $scope.message;

    if (!message)
      return console.log('no message');

    Message.add({
      text: message,
      user: $rootScope.username
    });

    $scope.message = '';
  };

  $scope.selfSent = function (message) {
    return (message.user == $rootScope.username);
  };

  $scope.timeFromNow = function (message) {
      return moment.unix(message.createdAt).fromNow();
    };

  // must take care of validation
  function showCreateRoomModal () {
    var modalInstance = $modal.open({
      templateUrl: '/views/create_room_modal.html',
      controller: function ($rootScope, $scope, $modalInstance) {
        $scope.ok = function () {
          Room.add({
            name: $scope.name,
            user: $rootScope.username
          });
            $modalInstance.close();
        };
      }
    });
  }

  $scope.$watch('currentRoom', function (room) {
    if (angular.isUndefined(room))
      return;

        Message.setRoom(room.$id);
        $scope.messages = Message.all();
  });
});
