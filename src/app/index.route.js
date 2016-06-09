(function() {
  'use strict';

  angular
    .module('myMovieDatabase01')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'app/listMovies/listMovies.html',
        controller: 'ListCtrl',
        controllerAs: 'List'
      })
      .when('/details/:id', {
        templateUrl: 'app/detailMovie/detailMovie.html',
        controller: 'DetailsCtrl',
        controllerAs: 'Details'
      })
      .when('/edit/:id', {
        templateUrl: 'app/editMovie/editMovie.html',
        controller: 'EditCtrl',
        controllerAs: 'Edit'
      })
      .when('/create', {
        templateUrl: 'app/createMovie/createMovie.html',
        controller: 'CreateCtrl',
        controllerAs: 'Create'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'Login'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }
})();
