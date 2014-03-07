'use strict';

/* jasmine specs for services go here */

describe('service', function () {

	// load the service's module
	beforeEach(module('Angello'));

	var modelService;

	// Initialize the service
	beforeEach(inject(function (angelloModel) {
		modelService = angelloModel;
	}));


	describe('#getStatuses', function () {
		it('should return seven different statuses', function () {
	 		expect(modelService.getStatuses().length).toBe(7);
	 	});
	 });
});