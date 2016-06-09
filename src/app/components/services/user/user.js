'use strict';

angular.module('myMovieDatabase01')
  .factory('user', function ($location, $q, authRef, ConnectedUser) {

    var user = null;

    function connect() {
      return function (email, password) {
        var defer = $q.defer();
        authRef.$authWithPassword({
          email: email,
          password: password
        })
          .then(function (authData) {
            user = new ConnectedUser(authData.uid, email);
            $location.path('/list');
            defer.resolve('Auth success');
        })
          .catch(function (error) {
            console.error('Authentication failed:', error);
            defer.reject('Adresse mail et/ou mot de passe incorrect(s)');
        });
        return defer.promise;
      };
    }

    return {
      connect: connect(),
      validConnection: function () {
        if (!user) {
          if (authRef.$getAuth()) {
            user = new ConnectedUser(authRef.$getAuth().uid, authRef.$getAuth().password.email);
          }
          else {
            $location.path('/login')
          }
        }
      },
      isConnected: function () {
        if (user) {
          return user.isConnected()
        }
        return false;
      },
      disconnect: function () {
        if (user) {
          user.disconnect();
        }
      },
      get: function () {
        return user;
      }
    }


  });
