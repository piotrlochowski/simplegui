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
            var millisec, seconds, minutes = 0;

            function pad(n, width, z) {
                z = z || '0';
                n = n + '';
                return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
            }
            if (input === 3600000)
                return 'n/a'
            millisec = pad(Math.floor(input % 1000), 3, 0);
            input /= 1000;
            seconds = pad(Math.floor(input % 60), 2, 0);
            input /= 60;
            minutes = pad(Math.floor(input % 60), 2, 0);
            return [minutes, seconds, millisec].join(':')
        }
    }).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/generalka', {templateUrl: 'partials/partial0.html'});
        $routeProvider.when('/proba1', {templateUrl: 'partials/partial1.html'});
        $routeProvider.when('/proba2', {templateUrl: 'partials/partial2.html'});
        $routeProvider.otherwise({redirectTo: '/generalka'});
    }]);



