'use strict';

import { ISearch } from './search.resource';
import { ISearchResource } from './search.resource';
import { MapService } from '../map/map.service';

export interface ISearchScope extends ng.IScope {
  searchResults: ISearch[];
  searchResult: ISearch;
  vm: SearchController;
}

export class SearchController {

  public scope: ISearchScope;
  private log: ng.ILogService;
  private Search: ISearchResource;
  private mapService: MapService;

  /* @ngInject */
  constructor($scope: ISearchScope, $log: ng.ILogService, Search: ISearchResource, mapService: MapService) {
    this.log = $log;
    this.log.debug('Creating SearchController');

    this.scope = $scope;
    this.scope.vm = this;
    this.scope.searchResults = [];
 //   this.scope.searchResult = new SearchResult('', 0, new Point(0, 0));
    this.Search = Search;
    this.mapService = mapService;
  }

  public search(): void {
//    this.log.debug('searching for: ', this.scope.searchResult);
    this.Search.query({}, (results: ISearch[]) => this.onLoad(results));
  }

  public centerMap(result: ISearch): void {
    this.log.debug('Centering for result: ', result);

    this.mapService.setCenter(result.point, result.zoomLevel);
  }

  private onLoad(searchResults: ISearch[]): void {
    this.log.debug('Search Results: ', searchResults);
    searchResults.forEach((result: ISearch) => {
      this.log.debug('Result: ', result);
    });
    this.scope.searchResults = searchResults;
  }

}
