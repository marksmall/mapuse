import { SearchService } from './search.service';

export class SearchController {

  private $log: ng.ILogService;
  private $scope: ng.IScope;
  private searchService: SearchService;
  private searchTerm: string;
  private vm: any;

  /* @ngInject */
  constructor($scope: ng.IScope, $log: ng.ILogService, searchService: SearchService) {
    this.$scope = $scope;
    this.$scope.vm = this;
    this.$log = $log;
    this.$log.debug('Creating SearchController');
    this.searchService = searchService;
  }

  public search(): void {
    this.$log.debug('Searching for: ', this.searchTerm);
  }
}
