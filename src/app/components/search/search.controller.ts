'use strict';

import { ISearch } from './search.resource';
import { ISearchResource } from './search.resource';
import { MapService } from '../map/map.service';

export interface ISearchScope extends ng.IScope {
  searchResults: ISearch[];
  searchTerm: string;
  extraValues: any[];
}

export class SearchController {

  public scope: ISearchScope;
  private log: ng.ILogService;
  private attributes: ng.IAttributes[];
  private element: any;
  private searchResource: ISearchResource;
  private mapService: MapService;

  /* @ngInject */
  constructor($scope: ISearchScope, $log: ng.ILogService, $attrs: ng.IAttributes[], $element: ng.IAugmentedJQuery, searchResource: ISearchResource, mapService: MapService) {
    this.log = $log;
    this.log.debug('Creating SearchController');
    this.attributes = $attrs;
    this.element = $element;

    this.scope = $scope;
    this.scope.searchResults = [];
    this.searchResource = searchResource;
    this.mapService = mapService;
  }

  /**
   * Capture keypress events and call search when the 'Enter' button pressed.
   */
  public enter(event: any): void {
    if (event.which === 13) {
      this.search();
    }
  }

  public search(): void {
    this.log.debug('Search Term: ', this.scope.searchTerm);
    this.searchResource.query({ search: this.scope.searchTerm }, (results: ISearch[]) => this.onLoad(results));
  }

  public centerMap(result: ISearch): void {
    this.log.debug('Centering for result: ', result);

    this.mapService.setCenter(result.point, result.zoomLevel);
  }

  private onLoad(searchResults: ISearch[]): void {
    var searchElement = this.element.find('#search #searchTerm');
    this.log.debug('Search Results: ', searchResults);

    if (searchResults.length === 0) {
      this.log.debug('No Search Results Found');
      // add event to element to display there was no results.
      searchElement.popover({
        trigger: 'manual',
        html: true,
        content: 'No Search Results found.',
        placement: 'bottom'
      });
      searchElement.popover('show');
    } else if (searchResults.length === 1) {
      searchElement.popover('hide');
      this.centerMap(searchResults[0]);
    } else {
      searchElement.popover('hide');
      searchResults.forEach((result: ISearch) => {
        this.log.debug('Result: ', result);
      });
    }
    this.scope.searchResults = searchResults;
  }

}
