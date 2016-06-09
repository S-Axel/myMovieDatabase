'use strict';

angular.module('myMovieDatabase01')
  .directive('createMovie', function () {
    return {
      templateUrl: 'app/components/createMovie/createMovie.template.html',
      restrict: 'E',
      scope: {},
      controller: function ($scope, $location, moviesFactory, RATINGS) {
        $scope.loading = false;
        $scope.ratingsData = RATINGS;
        /*$scope.movie = {
          actors: []
        };*/
        $scope.releaseDate = new Date();

        $scope.createMovie = function () {
          $scope.loading = true;
          $scope.movie.rating = $scope.rating.value;
          $scope.movie.release = $scope.releaseDate.toDateString();
          moviesFactory.createMovie($scope.movie).then(function () {
            $location.path('/list');
          }).catch(function (error) {
            $scope.loading = false;
            console.error(error);
          });
        };
        $scope.deleteActor = function (index) {
          $scope.movie.actors.splice(index, 1);
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