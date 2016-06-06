(function() {
  'use strict';

  angular
    .module('myMovieDatabase01')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location) {
    var deregistrationCallback =  $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
      if (error === 'AUTH_REQUIRED') {
        $location.path('/login');
      }
    });
    $rootScope.$on('$destroy', deregistrationCallback);
  }

})();
