'use strict';

describe('filters', function () {

	beforeEach(module('storyFilters'));

	describe('availableMark', function () {

		// Note that we call the helper function, inject(function(availableMarkFilter) { ... }), to get access to the filter that we want to test
		it('should convert status values to unicode checkmark or cross', 
			inject(function(availableMarkFilter)  {
				expect(availableMarkFilter('Available')).toBe('\u2713');
				expect(availableMarkFilter('Offline')).toBe('\u2718');
		}));
	 });
});
