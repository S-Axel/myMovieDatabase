'use strict';

angular.module('myMovieDatabase01')
  .directive('detailMovie', function () {
    return {
      templateUrl: 'app/components/detailMovie/detailMovie.template.html',
      restrict: 'E',
       scope: {
         moviePromise: '='
       },
      controller: function ($scope, $location) {
        $scope.loading = true;
        $scope.moviePromise.then(function (movie) {
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
