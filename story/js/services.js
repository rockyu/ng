'use strict';

/* Services */
var storyServies = angular.module('storyServies', ['ngResource']);

storyServies.factory('angelloHelper', function() {
	var buildIndex = function(source, property) {
		var tempArray = [];
		for(var i = 0, len = source.length; i < len; ++i) {
			tempArray[source[i][property]] = source[i];
		}

		// tempArray['Back Log'] = Object{ name = 'Back Log'}
		// tempArray['To Do'] = Object{ name = 'To Do'}
		return tempArray;
	};

	return {
		buildIndex: buildIndex
	};
});

// define a custom service that represents a RESTful client.
storyServies.factory('Profile', ['$resource', 
	function($resource) {
		return $resource('profiles/:name.json', {}, {
			query: {method: 'GET', params: {name: 'profiles'}, isArray: true}
		});
	}]);

storyServies.factory('angelloModel', function() {
	var getStatuses = function() {
		var tempArray = [
			{name:'Back Log'},
			{name:'To Do'},
			{name:'In Progress'},
			{name:'Code Review'},
			{name:'QA Review'},
			{name:'Verified'},
			{name:'Done'}
		];
		return tempArray;
	};

var getTypes = function() {
	var tempArray = [
		{name:'Feature'},
		{name:'Enhancement'},
		{name:'Bug'},
		{name:'Spike'}
	];
	return tempArray;
};

var getStories = function() {
	var tempArray = [
		{title:'2D Planner Shutdown',
		description:'2D Planner to be shutdown on 28 Feb',
		criteria:'Criteria pending.',
		status:'To Do',
		type:'Feature',
		reporter:'Lukas Ruebbelke',
		assignee:'Rock'},

		{title:'Add To List Breadcrumb Link is wrong',
		description:'In the breadcrumb on http://www.reece.com.au/bathrooms/product-list it starts with Bathrooms.. could we make it start with Products instead?',
		criteria:'Criteria pending.',
		status:'Enhancement',
		type:'Bug',
		reporter:'Lukas Ruebbelke',
		assignee:'Jerome'},

		{title:'Cleaning up cms_sync_events and cms_audit_events_processed tables',
		description:'Talk with Dave T. Apparently there is already some mechanism to do it.',
		criteria:'Criteria pending.',
		status:'In Progress',
		type:'Enhancement',
		reporter:'Lukas Ruebbelke',
		assignee:'Indu'},

		{title:'Story 03',
		description:'Description pending.',
		criteria:'Criteria pending.',
		status:'Done',
		type:'Enhancement',
		reporter:'Lukas Ruebbelke',
		assignee:'Indu'},

		{title:'Story 04',
		description:'Description pending.',
		criteria:'Criteria pending.',
		status:'Verified',
		type:'Bug',
		reporter:'Lukas Ruebbelke',
		assignee:'Rock'},

		{title:'Story 05',
		description:'Description pending.',
		criteria:'Criteria pending.',
		status:'To Do',
		type:'Spike',
		reporter:'Lukas Ruebbelke',
		assignee:'Indu'}
		];

		return tempArray;
	};

	return {
		getStatuses: getStatuses,
		getTypes: getTypes,
		getStories: getStories
	};
});