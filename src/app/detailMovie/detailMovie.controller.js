'use strict';

angular.module('myMovieDatabase01')
  .controller('DetailsCtrl', function ($scope, $routeParams) {
    $scope.movieId = $routeParams.id;
  });
