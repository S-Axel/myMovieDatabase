'use strict';

angular.module('myMovieDatabase01')
  .directive('editMovie', function () {
    return {
      templateUrl: 'app/components/editMovie/editMovie.template.html',
      restrict: 'E',
      scope: {
        movieId: '='
      },
      controller: function ($scope, $location, moviesFactory, RATINGS) {
        $scope.loading = true;
        $scope.movie = {
          actors: []
        };
        $scope.ratingsData = RATINGS;

        moviesFactory.getMovieById($scope.movieId).then(function (movie) {
          $scope.movie = movie;
          $scope.releaseDate = new Date($scope.movie.release);
          $scope.rating = $scope.ratingsData.filter(function(rating){
            return (rating.value === $scope.movie.rating);
          })[0];
          $scope.loading = false;
        }).catch(function (error) {
          console.error(error);
        });


        $scope.saveMovie = function () {
          $scope.loading = true;
          $scope.movie.rating = $scope.rating.value;
          $scope.movie.release = $scope.releaseDate.toDateString();
          $scope.movie.actors = $scope.movie.actors.filter(function (actor) {
            return actor !== '';
          });
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
