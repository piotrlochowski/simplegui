'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('GeneralForEvent', [function () {

    }])
    .controller('GeneralForTrial', [function () {

    }])
    .controller('Activation', function ($scope, $location) {
        $scope.isActive = function (route) {
            return route === $location.path();
        }
    });
;