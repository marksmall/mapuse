import { SearchResource } from './search.resource';

describe('Search Resource', () => {
  beforeEach(angular.mock.module('roam'));

  it('should be registered', inject((searchResource: SearchResource) => {
	  expect(searchResource).not.toBeNull();
  }));
});
