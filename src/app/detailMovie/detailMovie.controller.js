'use strict';

angular.module('myMovieDatabase01')
  .controller('DetailsCtrl', function ($scope, $routeParams, moviesFactory) {
    $scope.loading = true;
    moviesFactory.getMovieById($routeParams.id).then(function (movie) {
      $scope.movie = movie;
      $scope.loading = false;
    });
  });
