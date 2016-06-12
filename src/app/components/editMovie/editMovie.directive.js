'use strict';

angular.module('myMovieDatabase01')
  .directive('editMovie', function () {
    return {
      templateUrl: 'app/components/editMovie/editMovie.template.html',
      restrict: 'E',
      scope: {
        moviePromise: '='
      },
      controller: function ($scope, $location, moviesFactory, movieConvert, RATINGS) {
        $scope.loading = true;
        $scope.movie = {
          actors: []
        };
        $scope.ratingsData = RATINGS;

        $scope.moviePromise.then(function (movie) {
          $scope.movie = movie;
          $scope.releaseDate = movieConvert.dateToUi($scope.movie.release);
          console.log($scope.releaseDate);
          $scope.rating = movieConvert.ratingToUi($scope.movie.rating);
          $scope.loading = false;
        }).catch(function (error) {
          console.error(error);
        });


        $scope.saveMovie = function () {
          $scope.loading = true;
          $scope.movie.rating = $scope.rating.value;
          $scope.movie.release = movieConvert.dateToDatabase($scope.releaseDate);
          $scope.movie.actors = movieConvert.actorsToDatabase($scope.movie.actors);
          moviesFactory.saveMovie($scope.movie).then(function () {
            $location.path('/list');
          }).catch(function (error) {
            $scope.loading = false;
            console.error(error);
          });
        };

        $scope.deleteActor = function (index) {
          $scope.movie.actors.splice(index, 1);
        };

        //allow to add a new actor only if the actors array is empty or if the last actor is not an empty string
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
        element.find('#posterUpload').on('change', function (posterUpload) {
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
