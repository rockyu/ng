'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Story App', function() {

  describe('Story list view', function() {

    beforeEach(function() {
      browser().navigateTo('app2.html');
    });


    it('should filter the list as user types into the search box', function() {
      expect(repeater('#story-board .story').count()).toBe(6);

      input('query').enter('2D Planner');
      expect(repeater('#story-board .story').count()).toBe(1);
    });

  });


});
