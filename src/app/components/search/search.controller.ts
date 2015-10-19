'use strict';

import { Point } from './point';
import { ISearch } from './search.resource';
import { SearchResult } from './search';
import { ISearchResource } from './search.resource';

interface ISearchScope extends ng.IScope {
  searchResults: ISearch[];
//  searchResult: ISearch;
  vm: SearchController;
}

export class SearchController {

  private log: ng.ILogService;
  private scope: ISearchScope;
  private Search: ISearchResource;

  /* @ngInject */
  constructor($scope: ISearchScope, $log: ng.ILogService, Search: ISearchResource) {
    this.log = $log;
    this.log.debug('Creating SearchController');

    this.scope = $scope;
    this.scope.vm = this;
    this.scope.searchResults = [];
 //   this.scope.searchResult = new SearchResult('', 0, new Point(0, 0));
    this.Search = Search;
  }

  public search(): void {
//    this.log.debug('searching for: ', this.scope.searchResult);
    this.Search.query({}, (results: ISearch[]) => this.onLoad(results));
  }

  private onLoad(searchResults: ISearch[]): void {
    this.log.debug('Search Results: ', searchResults);
    searchResults.forEach(result => {
      this.log.debug('Result: ', result);
    });
    this.scope.searchResults = searchResults;
  }

}
