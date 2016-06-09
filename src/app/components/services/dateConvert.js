'use strict';

angular.module('myMovieDatabase01')
  .factory('dateConvert', function () {
    return {
      toUi: function (databaseDate) {
        return new Date(databaseDate);
      },
      toDatabase: function (uiDate) {
        return uiDate.toDateString();
      }
    }
  });
