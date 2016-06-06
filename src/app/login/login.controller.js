'use strict';

/**
 * @ngdoc function
 * @name newMovieDatabaseApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the newMovieDatabaseApp
 */
angular.module('myMovieDatabase01')
  .controller('LoginCtrl', function ($scope, $location, firebaseFactory) {
    if (firebaseFactory.isAuth()) {
      $location.path('/list');
    }
  });
