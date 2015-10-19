export class SearchService {

  private $log: ng.ILogService;

  /** @ngInject */
  constructor($log: ng.ILogService) {
    this.$log = $log;
    this.$log.debug('Creating SearchService');
  }

  public search(data: any): void {
    this.$log.debug('Search for: ', data);
  }
}
