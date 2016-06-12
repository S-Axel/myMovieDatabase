'use strict';

angular.module('myMovieDatabase01')
  .directive('movieList', function () {
    return {
      templateUrl: 'app/components/listMovies/listMovies.template.html',
      restrict: 'E',
      transclude: true,
      scope: {
        movies: '='
      },
      controller: function ($scope, $location, moviesFactory) {
        
        $scope.modifyMovie = function (movie) {
          $location.path('/edit/' + movie.$id);
        };
        $scope.detailMovie = function (movie) {
          $location.path('/details/' + movie.$id);
        };
        $scope.createMovie = function () {
          $location.path('/create');
        };
        $scope.deleteMovie = moviesFactory.deleteMovie;
      }
    };
  });
