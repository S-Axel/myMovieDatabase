'use strict';

angular.module('myMovieDatabase01')
  .directive('movieList', function () {
    return {
      templateUrl: 'app/components/listMovies/listMovies.template.html',
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function ($scope, $location, moviesFactory) {
        $scope.loading = true;
        moviesFactory.getMovies().then(function (movies) {
          $scope.movies = movies;
          $scope.loading = false;
        });

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
