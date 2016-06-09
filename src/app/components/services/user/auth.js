'use strict';

angular.module('myMovieDatabase01')
  .factory('authRef', function ($firebaseAuth, SERVER_URL) {
    var ref = new Firebase(SERVER_URL);
    return $firebaseAuth(ref);
  });
