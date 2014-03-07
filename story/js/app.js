'use strict';

/* Services */
var angelloApp = angular.module('Angello', [
	'ngRoute',
	'storyServies',
	'storyControllers',
	'storyFilters'
]);

angelloApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/assignee/:name', {
        templateUrl: 'assignee-detail.html',
        controller: 'AssigneeDetailCtrl'
      }).
      otherwise({
        templateUrl: 'app2.html',
        controller: 'MainCtrl'
      });
  }]);
