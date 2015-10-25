import { ISearch } from './search.resource';
import { ISearchScope } from './search.controller';
import { ISearchResource } from './search.resource';
import { SearchController } from './search.controller';
import { MapService } from '../map/map.service';

describe('Search Controller', () => {
//  var mockSearchScope: ISearchScope;
//  var attributes: ng.IAttributes[];
//  var element: ng.IAugmentedJQuery;
//  var mockSearchResource: ISearchResource;
//  var mockMapService: MapService;
//  var searchController: SearchController;
//  var directive: ng.IDirective;
//  var q: any;
  let element: ng.IAugmentedJQuery;
  let searchController: SearchController;


  beforeEach(angular.mock.module('roam'));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    element = angular.element(`
      <digimap-search></digimap-search>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    searchController = (<any> element.isolateScope()).vm;
  }));

  it('should be compiled', function() {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', function() {
    expect(searchController).not.toBeNull();
  });

  beforeEach(inject(($httpBackend: any) => {
    var singleResult = {
      name: 'EH9 1PR',
      zoomLevel: 18,
      point: {
        x: 55.953252,
        y: -3.188267
      },
      get: function() {}
    };
    var multipleResults = [{
      name: 'Edinburgh',
      zoomLevel: 18,
      point: {
        x: 55.953252,
        y: -3.188267
      }
    }, {
      name: 'Glasgow',
      zoomLevel: 18,
      point: {
        x: 55.953252,
        y: -3.188267
      }
    }];

    $httpBackend.when('GET', '/api/search?search=zero').respond([]);
    $httpBackend.when('GET', '/api/search?search=EH9 1PR').respond([singleResult]);
    $httpBackend.when('GET', '/api/search?search=Edinburgh').respond([multipleResults]);
  }));

/*  beforeEach(inject(($rootScope: ng.IRootScopeService, $log: ng.ILogService, searchResource: any, $httpBackend: any) => {
    mockSearchScope = <ISearchScope>$rootScope.$new();
    searchController = new SearchController(mockSearchScope, $log, attributes, element, searchResource, mockMapService);
  }));
*/
/*  it('should be registered', () => {
	  expect(searchController).not.toBeNull();
  });
*/
  describe('search function', () => {
    it('should return zero results', () => {
      expect(true).toBeTruthy();
      searchController.scope.searchTerm = 'EH9 1PR';
      console.log('Search Results: ', searchController.scope.searchResults);
      console.log('Search Term: ', searchController.scope.searchTerm);
      searchController.search();
      console.log('Search Results: ', searchController.scope.searchResults);
    });

/*    it('should return a single result', () => {
      expect(true).toBeTruthy();
    });

    it('should return multiple results', () => {
      expect(true).toBeTruthy();
    });
*/
  });

/*
  describe('centerMap function', () => {
    it('should center the map based on the search result', () => {
      expect(true).toBeTruthy();
    });
  });
*/
});
