'use strict';

angular.module('myMovieDatabase01')
  .directive('testAuthent', function () {
    return {
      restrict: 'A',
      scope: {},
      controller: function (user) {
        user.validConnection();
      }
    }
  });
