'use strict';

/**
 * @ngdoc service
 * @name newMovieDatabaseApp.RATINGS
 * @description
 * # RATINGS
 * Constant in the newMovieDatabaseApp.
 */
angular.module('myMovieDatabase01')
  .constant('RATINGS', [
    {label: 'médiocre', value: 1},
    {label: 'mauvais', value: 2},
    {label: 'moyen', value: 3},
    {label: 'bon', value: 4},
    {label: 'excellent', value: 5}]);
