'use strict';

angular.module('myMovieDatabase01')
  .directive('loading', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/loading/loading.template.html',
      scope: {}
    };
  });
