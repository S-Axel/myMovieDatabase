(function() {
  'use strict';

  angular
    .module('myMovieDatabase01')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'app/movieList/movieList.html',
        controller: 'ListCtrl',
        controllerAs: 'List',
        resolve: {
          'currentAuth': ['firebaseFactory', function (fbFactory) {
            return fbFactory.requireAuth();
          }]
        }
      })
      .when('/details/:id', {
        templateUrl: 'app/detailMovie/detailMovie.html',
        controller: 'DetailsCtrl',
        controllerAs: 'Details',
        resolve: {
          'currentAuth': ['firebaseFactory', function (fbFactory) {
            return fbFactory.requireAuth();
          }]
        }
      })
      .when('/edit/:id', {
        templateUrl: 'app/editMovie/editMovie.html',
        controller: 'EditCtrl',
        controllerAs: 'Edit',
        resolve: {
          'currentAuth': ['firebaseFactory', function (fbFactory) {
            return fbFactory.requireAuth();
          }]
        }
      })
      .when('/create', {
        templateUrl: 'app/createMovie/createMovie.html',
        controller: 'CreateCtrl',
        controllerAs: 'Create',
        resolve: {
          'currentAuth': ['firebaseFactory', function (fbFactory) {
            return fbFactory.requireAuth();
          }]
        }
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
