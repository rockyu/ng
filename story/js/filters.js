angular.module('storyFilters', []).filter('availableMark', function() {
	return function(input) {
		return 'Available' === input ? '\u2713' : '\u2718';
	}
});