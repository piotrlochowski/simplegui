'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    filter('toHumanReadableFormat',function () {
        return function (input) {
            var seconds, minutes = 0;
            var millisec

            function pad(n, width, z) {
                z = z || '0';
                n = n + '';
                return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
            }

            millisec = pad(Math.floor(input % 1000), 3, 0);
            input /= 1000;
            seconds = pad(Math.floor(input % 60), 2, 0);
            input /= 60;
            minutes = pad(Math.floor(input % 60), 2, 0);
            console.log("seconds:", seconds);
            return [minutes, seconds, millisec].join(':')
        }
    }).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view0', {templateUrl: 'partials/partial0.html', controller: 'GeneralEventCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'TrialDriverS1Ctrl'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'TrialDriverS2Ctrl'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);



