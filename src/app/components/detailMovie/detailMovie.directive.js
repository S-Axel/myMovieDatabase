'use strict';

angular.module('myMovieDatabase01')
  .directive('detailMovie', function () {
    return {
      templateUrl: 'app/components/detailMovie/detailMovie.template.html',
      restrict: 'E',
       scope: {
         movieId: '='
       },
      controller: function ($scope, $location, moviesFactory) {
        $scope.loading = true;
        moviesFactory.getMovieById($scope.movieId).then(function (movie) {
          $scope.movie = movie;
          $scope.loading = false;
        });

        $scope.editMovie = function () {
          $location.path('edit/' + $scope.movie.$id);
        };
        $scope.back = function () {
          $location.path('list/');
        };
        $scope.commaBtwActors = function (index) {
          return ((index < $scope.movie.actors.length - 1) ? ', ' : '');
        };
      }
    };
  });
