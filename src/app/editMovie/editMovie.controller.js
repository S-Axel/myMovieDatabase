'use strict';

angular.module('myMovieDatabase01')
  .controller('EditCtrl', function ($scope, $routeParams) {
    $scope.movieId = $routeParams.id;
  });
