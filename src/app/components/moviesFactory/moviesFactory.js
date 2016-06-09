'use strict';

angular.module('myMovieDatabase01')
  .factory('moviesFactory', function ($q, $firebaseArray, SERVER_URL) {

    var movies = $firebaseArray(new Firebase(SERVER_URL + '/movies'));

    function getMovies() {
      return movies.$loaded();
    }

    function getMovieById(id) {
      var defer = $q.defer();
      movies.$loaded()
        .then(function () {
          defer.resolve(movies.$getRecord(id));
        })
        .catch(function (error) {
          defer.reject(error);
        });
      return defer.promise;
    }


    function createMovie(movie) {
      var defer = $q.defer();
      movies.$add(movie)
        .then(function (sameMovie) {
        defer.resolve(sameMovie);
      })
        .catch(function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    function saveMovie(movie) {
      var defer = $q.defer();
      movies.$save(movie)
        .then(function (sameMovie) {
        defer.resolve(sameMovie);
      })
        .catch(function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }

    function deleteMovie(movie) {
      var defer = $q.defer();
      movies.$remove(movie)
        .then(function (sameMovie) {
        defer.resolve(sameMovie);
      })
        .catch(function (error) {
        defer.reject(error);
      });
      return defer.promise;
    }
    
    return {
      getMovieById: getMovieById,
      deleteMovie: deleteMovie,
      saveMovie: saveMovie,
      createMovie: createMovie,
      getMovies: getMovies
    };
  });
