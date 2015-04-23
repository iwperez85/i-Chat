'use strict';

/**
 * @ngdoc service
 * @name i-ChatApp.message
 * @description
 * # message
 * Service in the i-ChatApp.
 * global moment: true
 */
angular.module('i-ChatApp')
  .service('Message', ['$firebaseArray', function ($firebaseArray) {

    var firebaseRef = new Firebase('i-chat.firebaseIO.com');
    var messageRef = firebaseRef.child('messages');
    var messagesRoot = $firebaseArray(messageRef);

    return {
      rootRef: firebaseRef,
      setRoom: function (roomId) {
        this.messages = $firebaseArray(messageRef.child(roomId));
      },
      all: function () {
        if (!this.messages)
          return null;

        return this.messages;
      },
      add: function (data) {
        if (!this.messages) {
          return null;
        }

        data.createdAt = moment().unix();
        this.messages.$add(data);
      }
    };
  }]);
