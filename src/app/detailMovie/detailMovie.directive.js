'use strict';

/**
 * @ngdoc directive
 * @name newMovieDatabaseApp.directive:detailMovie
 * @description
 * # detailMovie
 */
angular.module('myMovieDatabase01')
  .directive('detailMovie', function () {
    return {
      templateUrl: 'app/detailMovie/detailMovie.template.html',
      restrict: 'E',
      scope: {
        movie: '='
      },
      controller: function ($scope, $location) {
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
