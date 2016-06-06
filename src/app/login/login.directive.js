'use strict';

/**
 * @ngdoc directive
 * @name newMovieDatabaseApp.directive:login
 * @description
 * # login
 */
angular.module('myMovieDatabase01')
  .directive('login', function () {
    return {
      templateUrl: 'app/login/login.template.html',
      restrict: 'E',
      controller: function ($scope, $location, firebaseFactory) {
        $scope.error = false;
        $scope.user = {};
        $scope.tryConnect = function() {
          firebaseFactory.authWithPassword($scope.user).then(function () {
            $location.path('/list');
          }).catch(function (error) {
            $scope.error = error.code;
          });
        };
      }
    };
  });
