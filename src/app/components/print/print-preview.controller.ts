import { MapService } from '../map/map.service';
import { IPrintResource } from './print.resource';

export interface IPrintPreviewScope extends ng.IScope {
  printOptions: any;
}


export class PrintPreviewController {

//  public item: any;
  private log: ng.ILogService;
  private scope: IPrintPreviewScope;
  private dialog: ng.ui.bootstrap.IModalServiceInstance;
  private mapService: MapService;
  private printResource: IPrintResource;
  private previewMap: any;

  /* @ngInject */
  constructor($log: ng.ILogService, $scope: IPrintPreviewScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, mapService: MapService, printResource: IPrintResource) {
    this.log = $log;
    this.scope = $scope;
    this.dialog = $modalInstance;
    this.mapService = mapService;
    this.printResource = printResource;

//    var previewMap = this.mapService.map.clone();
//    this.log('Preview Map: ', previewMap);
//    this.item = item;
  }

  public generate(): void {
    this.log.debug('Generating Printable Map');
    this.log.debug('Print Options: ', this.scope.printOptions);
    this.dialog.close(); // passing this item back
    this.printResource.save({ printOptions: this.scope.printOptions }, (results: any) => this.onLoad(results));
//    this.dialog.close(this.item); // passing this item back
                                          // is not necessary since it
                                          // is the same instance of the
                                          // item sent to the modal
  }

  public cancel(): void {
    this.log.debug('Cancel Print');
    this.dialog.dismiss('cancel');
  }
  private onLoad(printResults: any): void {
    this.log.debug('Print onLoad: ', printResults);
  }

}
