'use strict';

angular.module('myMovieDatabase01')
  .controller('DetailsCtrl', function ($scope, $routeParams, moviesFactory) {
    $scope.moviePromise = moviesFactory.getMovieById($routeParams.id);
  });
