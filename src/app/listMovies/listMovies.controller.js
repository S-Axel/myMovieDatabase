'use strict';

angular.module('myMovieDatabase01')
  .controller('ListCtrl', function ($scope, moviesFactory) {
    $scope.loading = true;
    moviesFactory.getMovies().then(function (movies) {
      $scope.movies = movies;
      $scope.loading = false;
    });
  });
