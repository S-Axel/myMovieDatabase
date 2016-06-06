'use strict';

/**
 * @ngdoc service
 * @name newMovieDatabaseApp.movieFireBase
 * @description
 * # movieFireBase
 * Factory in the newMovieDatabaseApp.
 */
angular.module('myMovieDatabase01')
  .factory('firebaseFactory', function ($firebaseAuth, $firebaseArray, $q) {

    var refFirebase = new Firebase('https://axelmoviedatabase.firebaseio.com');
    var auth = $firebaseAuth(refFirebase);

    function isAuth() {
      return !!refFirebase.getAuth();
    }

    function authWithPassword(user) {
      return auth.$authWithPassword(user);
    }


    var movies = $firebaseArray(refFirebase.child('movies'));

    function getMovies() {
      return movies;
    }

    function getMovie(id) {
      var defer = $q.defer();
      movies.$loaded().then(function () {
        defer.resolve(movies.$getRecord(id));
      }).catch(function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    function saveMovie(movie) {
      var defer = $q.defer();
      movies.$save(movie).then(function (sameMovie) {
        defer.resolve(sameMovie);
      }).catch(function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    function createMovie(movie) {
      var defer = $q.defer();
      movies.$add(movie).then(function (sameMovie) {
        defer.resolve(sameMovie);
      }).catch(function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    function deleteMovie(movie) {
      var defer = $q.defer();
      movies.$remove(movie).then(function (sameMovie) {
        defer.resolve(sameMovie);
      }).catch(function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    return {
      getMovies: getMovies,
      getMovie: getMovie,
      saveMovie: saveMovie,
      createMovie: createMovie,
      deleteMovie: deleteMovie,
      disconnect: auth.$unauth,
      requireAuth: auth.$requireAuth,
      isAuth: isAuth,
      authWithPassword: authWithPassword
    };
  });
