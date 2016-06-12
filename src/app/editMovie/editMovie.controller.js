'use strict';

angular.module('myMovieDatabase01')
  .controller('EditCtrl', function ($scope, $routeParams, moviesFactory) {
    $scope.moviePromise = moviesFactory.getMovieById($routeParams.id);
  });
