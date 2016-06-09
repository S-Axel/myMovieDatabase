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
    
    function modifyMovies(movie, databaseAction) {
      var defer = $q.defer();
      databaseAction(movies, movie)
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

      getMovies: getMovies,

      deleteMovie: function (movie) {
        return modifyMovies(movie, function (movies, movieParam) {
          return movies.$remove(movieParam);
        });
      },

      saveMovie: function (movie) {
        return modifyMovies(movie, function (movies, movieParam) {
          return movies.$save(movieParam);
        });
      },

      createMovie: function (movie) {
        return modifyMovies(movie, function (movies, movieParam) {
          return movies.$add(movieParam);
        });
      }
    };
  });
