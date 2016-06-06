'use strict';

/**
 * @ngdoc directive
 * @name newMovieDatabaseApp.directive:createMovie
 * @description
 * # createMovie
 */
angular.module('myMovieDatabase01')
  .directive('createMovie', function () {
    return {
      templateUrl: 'app/createMovie/createMovie.template.html',
      restrict: 'E',
      scope: {
        dbCreateMovie: '='
      },
      controller: function ($scope, $location, RATINGS) {
        $scope.loading = false;
        $scope.ratingsData = RATINGS;
        $scope.movie = {
          actors: []
        };
        $scope.releaseDate = new Date();

        $scope.createMovie = function () {
          $scope.loading = true;
          $scope.movie.rating = $scope.rating.value;
          $scope.movie.release = $scope.releaseDate.toDateString();
          $scope.dbCreateMovie($scope.movie).then(function () {
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
      link: function postLink(scope, element) {
        element.find('#posterUpload').on('change', function (posterUpload) {
          console.log('change input');
          var file = posterUpload.target.files[0];
          var fileReader = new FileReader();
          fileReader.onload = function (file) {
            scope.movie.poster = file.target.result;
            element.find('#posterImage').attr('src', scope.movie.poster);
          };
          if (file) {
            console.log('readasdataurl');
            fileReader.readAsDataURL(file);
          }
        });
      }
    };
  });
