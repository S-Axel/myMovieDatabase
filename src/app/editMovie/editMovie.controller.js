'use strict';

/**
 * @ngdoc function
 * @name newMovieDatabaseApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the newMovieDatabaseApp
 */
angular.module('myMovieDatabase01')
  .controller('EditCtrl', function ($scope, $routeParams, firebaseFactory) {
    $scope.getMovie = firebaseFactory.getMovie($routeParams.id);
    $scope.saveMovie = firebaseFactory.saveMovie;
  });
