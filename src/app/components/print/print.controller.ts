import { MapService } from '../map/map.service';

export interface IPrintScope extends ng.IScope {
  print: any;
}

export class PrintController {

  private log: ng.ILogService;
  private scope: IPrintScope;
  private attributes: ng.IAttributes[];
  private element: any;
  private modal: ng.ui.bootstrap.IModalService;

  /* @ngInject */
  constructor($scope: IPrintScope, $log: ng.ILogService, $attrs: ng.IAttributes[], $element: ng.IAugmentedJQuery, $modal: ng.ui.bootstrap.IModalService) {
    this.log = $log;
    this.log.debug('Creating PrintController');
    this.attributes = $attrs;
    this.element = $element;
    this.modal = $modal;
    this.scope = $scope;

    this.scope.print = {};
    this.scope.print.tooltip = 'Generate Printable Maps';
  }

  public open(): void {
    this.log.debug('Open Print Preview Panel');
 //   var that = this;
    var options: ng.ui.bootstrap.IModalSettings = {
      templateUrl: 'app/components/print/print-preview.html',
      controller: PrintPreviewController,
      controllerAs: 'vm'
      // ,
//      resolve: {
//        items: function () {
//          return this.scope.items;
//        }
//      }
//      resolve: {
//        item: () => item // <- this will pass the same instance
//                         // of the item displayed in the table to the modal
//      }
    };

    this.modal.open(options);
    this.log.debug('Print Preview Panel Open');
  }
}

export interface IPrintPreviewScope extends ng.IScope {
  printOptions: any;
}


export class PrintPreviewController {

//  public item: any;
  private log: ng.ILogService;
  private scope: IPrintPreviewScope;
  private dialog: ng.ui.bootstrap.IModalServiceInstance;
  private mapService: MapService;
  private previewMap: any;

  /* @ngInject */
  constructor($log: ng.ILogService, $scope: IPrintPreviewScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, mapService: MapService) {
    this.log = $log;
    this.scope = $scope;
    this.dialog = $modalInstance;
    this.mapService = mapService;

//    var previewMap = this.mapService.map.clone();
//    this.log('Preview Map: ', previewMap);
//    this.item = item;
  }

  public generate(): void {
    this.log.debug('Generating Printable Map');
    this.log.debug('Print Options: ', this.scope.printOptions);
    this.dialog.close(); // passing this item back
//    this.dialog.close(this.item); // passing this item back
                                          // is not necessary since it
                                          // is the same instance of the
                                          // item sent to the modal
  }

  public cancel(): void {
    this.log.debug('Cancel Print');
    this.dialog.dismiss('cancel');
  }
}
