'use strict';

/**
 * @ngdoc directive
 * @name newMovieDatabaseApp.directive:listDirective
 * @description
 * # listDirective
 */
angular.module('myMovieDatabase01')
  .directive('movieList', function () {
    return {
      templateUrl: 'app/movieList/movieList.template.html',
      restrict: 'E',
      scope: {
        movies: '=',
        dbDeleteMovie: '='
      },
      controller: function ($scope, $location) {
        $scope.loading = true;
        $scope.movies.$loaded().then(function () {
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
        $scope.deleteMovie = function(movie) {
          $scope.dbDeleteMovie(movie);
        };
      }
    };
  });
