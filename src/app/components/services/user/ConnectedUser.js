'use strict';

angular.module('myMovieDatabase01')
.factory('ConnectedUser', function ($location, authRef) {

  function ConnectedUser(uid, email) {
    this.uid = uid;
    this.email = email;
    this.connected = true;
  }

  ConnectedUser.prototype.isConnected = function () {
    return this.connected;
  };

  ConnectedUser.prototype.disconnect = function () {
    authRef.$unauth();
    this.uid = '';
    this.email = '';
    this.connected = false;
    $location.path('/login');
  };

  return ConnectedUser;

});
