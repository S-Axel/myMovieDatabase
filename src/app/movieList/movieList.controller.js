'use strict';

/**
 * @ngdoc function
 * @name newMovieDatabaseApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the newMovieDatabaseApp
 */
angular.module('myMovieDatabase01')
  .controller('ListCtrl', function ($scope, firebaseFactory) {
    $scope.movieList = firebaseFactory.getMovies();
    $scope.deleteMovie = firebaseFactory.deleteMovie;
  });
