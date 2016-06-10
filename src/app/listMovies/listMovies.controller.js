'use strict';

angular.module('myMovieDatabase01')
  .controller('ListCtrl', function ($scope, moviesFactory) {
    $scope.movieListPromise = moviesFactory.getMovies();
  });
