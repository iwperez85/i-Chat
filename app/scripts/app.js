'use strict';

/**
 * @ngdoc overview
 * @name i-ChatApp
 * @description
 * # i-ChatApp
 *
 * Main module of the application.
 */
angular
  .module('i-ChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap.modal',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'AuthCtrl'
      })
      .when('/edituser', {
        templateUrl: 'views/signin.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($cookies, $location, $rootScope) {
    var username = $cookies.username;
    if (!username || username.length <= 0) {
      $location.path('/signin');
    } else {
      $rootScope.username = $cookies.username;
    }
  });
