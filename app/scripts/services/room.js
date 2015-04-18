'use strict';

/**
 * @ngdoc service
 * @name i-ChatApp.room
 * @description
 * # room
 * Factory in the i-ChatApp.
 */

/*global Firebase:true*/
angular.module('i-ChatApp')
  .factory('Room', ['$firebaseArray', function ($firebaseArray) {

    var firebaseRef = new Firebase('i-chat.firebaseIO.com');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,
      add: function (data) {

        rooms.$add(data);

      }
    };
  }]);
