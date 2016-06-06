'use strict';

/**
 * @ngdoc directive
 * @name newMovieDatabaseApp.directive:editMovie
 * @description
 * # editMovie
 */
angular.module('myMovieDatabase01')
  .directive('editMovie', function () {
    return {
      templateUrl: 'app/editMovie/editMovie.template.html',
      restrict: 'E',
      scope: {
        getMovie: '=',
        dbSaveMovie: '='
      },




      controller: function ($scope, $location, RATINGS) {
        $scope.loading = true;
        $scope.movie = {
          actors: []
        };
        $scope.getMovie.then(function (movie) {
          $scope.movie = movie;
          $scope.releaseDate = new Date($scope.movie.release);
          $scope.rating = $scope.ratingsData.filter(function(rating){
            return (rating.value === $scope.movie.rating);
          })[0];
          $scope.loading = false;
        });

        $scope.ratingsData = RATINGS;

        $scope.saveMovie = function () {
          $scope.loading = true;
          $scope.movie.rating = $scope.rating.value;
          $scope.movie.release = $scope.releaseDate.toDateString();
          $scope.movie.actors = $scope.movie.actors.filter(function (actor) {
            return actor !== '';
          });
          $scope.dbSaveMovie($scope.movie).then(function () {
            $location.path('/list');
          }).catch(function (error) {
            $scope.loading = false;
            console.error(error);
          });
        };

        $scope.deleteActor = function (actor) {
          var newActors = [];
          var actorIndex = $scope.movie.actors.indexOf(actor);
          console.log(actorIndex);
          if (actorIndex) {
            newActors = $scope.movie.actors.slice(0, actorIndex);
          }
          newActors = newActors.concat($scope.movie.actors.slice(actorIndex + 1, $scope.movie.actors.length));
          $scope.movie.actors = newActors;
        };
        $scope.canAddActor = function () {
          return !($scope.movie.actors && $scope.movie.actors !== []) ||
            ($scope.movie.actors[$scope.movie.actors.length - 1] !== '');
        };

        $scope.addActor = function () {
          $scope.movie.actors.push('');
        };
        $scope.back = function () {
          $location.path('/list');
        };
      },




      link: function (scope, element) {
        element.find('#posterUpload').on('cjhange', function (posterUpload) {
          var file = posterUpload.target.files[0];
          var fileReader = new FileReader();
          fileReader.onload = function (file) {
            scope.movie.poster = file.target.result;
            element.find('#posterImage').attr('src', scope.movie.poster);
          };
          if (file) {
            fileReader.readAsDataURL(file);
          }
        });
      }
    };
  });
