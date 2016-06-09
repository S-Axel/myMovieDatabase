'use strict';

angular.module('myMovieDatabase01')
  .factory('movieConvert', function (RATINGS) {

    function dateToUi(databaseDate) {
      return new Date(databaseDate);
    }

    function dateToDatabase(uiDate) {
      return uiDate.toLocaleDateString();
    }

    function actorsToDatabase(actors) {
      return actors.filter(function (actor) {
        return actor !== '';
      });
    }

    function ratingToUi(rating) {
      return RATINGS.filter(function(ratingModel){
        return (ratingModel.value === rating);
      })[0];
    }

    return {
      dateToUi: dateToUi,
      dateToDatabase: dateToDatabase,
      actorsToDatabase: actorsToDatabase,
      ratingToUi: ratingToUi
    }
  });
