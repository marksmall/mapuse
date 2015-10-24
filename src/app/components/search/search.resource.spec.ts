import { SearchResource } from './search.resource';

describe('Resource Search', () => {
  beforeEach(angular.mock.module('roam'));

  it('should be registered', inject((searchResource: SearchResource) => {
	  expect(searchResource).not.toBeNull();
  }));
});
