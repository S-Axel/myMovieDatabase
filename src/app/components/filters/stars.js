'use strict';

/**
 * @ngdoc filter
 * @name newMovieDatabaseApp.filter:ratings
 * @function
 * @description
 * # ratings
 * Filter in the newMovieDatabaseApp.
 */

angular.module('myMovieDatabase01')
  .filter('stars', function () {
    return function (input) {
      input = input || '';
      var result = '';
      var fullStar = '\u2605';
      var emptyStar = '\u2606';
      for (var i = 0; i < input && i < 5; i++) {
        result += fullStar;
      }
      for (var j = input; j < 5; j++) {
        result += emptyStar;
      }
      return result;
    };
  });
