/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('myMovieDatabase01')
    .constant('RATINGS', [
      {label: 'médiocre', value: 1},
      {label: 'mauvais', value: 2},
      {label: 'moyen', value: 3},
      {label: 'bon', value: 4},
      {label: 'excellent', value: 5}])
    .constant('SERVER_URL', 'https://axelmoviedatabase.firebaseio.com');
})();
