'use strict';

/**
 * @ngdoc function
 * @name newMovieDatabaseApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the newMovieDatabaseApp
 */
angular.module('myMovieDatabase01')
  .controller('DetailsCtrl', function ($scope, $routeParams, firebaseFactory) {
    firebaseFactory.getMovie($routeParams.id).then(function (movie) {
      $scope.currentMovie = movie;
    }).catch(function (error) {
      console.error(error);
    });
  });
