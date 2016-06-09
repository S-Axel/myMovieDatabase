'use strict';

angular.module('myMovieDatabase01')
  .controller('LoginCtrl', function ($scope, $location, user) {
    if (user.isConnected()) {
      $location.path('/list')
    }
    var initUser = {
      email: '',
      password: ''
    };

    $scope.user = angular.copy(initUser);

    $scope.reset = function () {
      $scope.user = angular.copy(initUser);
    };


    $scope.connect = function (email, password) {
      user.connect(email, password)
        .then()
        .catch(function (error) {
        $scope.error = error;
      });
    };

  });
