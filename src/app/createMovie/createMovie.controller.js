'use strict';

/**
 * @ngdoc function
 * @name newMovieDatabaseApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the newMovieDatabaseApp
 */
angular.module('myMovieDatabase01')
  .controller('CreateCtrl', function ($scope, firebaseFactory) {
    $scope.createMovie = firebaseFactory.createMovie;
  });
