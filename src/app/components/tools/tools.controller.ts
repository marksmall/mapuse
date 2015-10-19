import { SearchService } from './search.service';

export class ToolsController {

  private $log: ng.ILogService;
  private searchService: SearchService;

  /* @ngInject */
  constructor($log: ng.ILogService, searchService: SearchService) {
    this.$log = $log;
    this.$log.debug('Creating SearchController');
    this.searchService = searchService;

    $(document).ready(function() {
      $('[data-toggle="popover"]').popover();
    });
  }
}
