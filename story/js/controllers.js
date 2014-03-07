var storyControllers = angular.module('storyControllers', []);

storyControllers.controller('MainCtrl', function($scope, angelloModel, angelloHelper) {
	$scope.currentStory;

	$scope.stories = angelloModel.getStories();
	$scope.statuses = angelloModel.getStatuses();
	$scope.types = angelloModel.getTypes();

	$scope.statusesIndex = angelloHelper.buildIndex($scope.statuses, 'name');
	$scope.typesIndex = angelloHelper.buildIndex($scope.types, 'name');

	$scope.setCurrentStory = function(story) {
		$scope.currentStory = story;
		$scope.currentStatus = $scope.statusesIndex[story.status];
		$scope.currentType = $scope.typesIndex[story.type]
	};
	
	$scope.createStory = function() {
		$scope.stories.push({
			title:'New Story',
			description:'Description pending.',
			assignee: 'unassigned'
		});
	};
});

// storyControllers.controller('AssigneeDetailCtrl', ['$scope', '$routeParams', '$http',
// 	function($scope, $routeParams, $http) {
// 		$scope.name = $routeParams.name;
// 		$http.get('profiles/' + $routeParams.name + '.json').success(function(data) {
// 			$scope.profile = data
// 		}); 
// 	}]);

// factoring out the lower-level $http service, replacing it with a new service called Profile
storyControllers.controller('AssigneeDetailCtrl', ['$scope', '$routeParams', 'Profile',
	function($scope, $routeParams, Profile) {
		$scope.name = $routeParams.name;
		$scope.profile = Profile.get( {name: $routeParams.name} );
	}]);