import { IPrintScope } from './print.directive';

export class PrintController {

  public scope: IPrintScope;
  private log: ng.ILogService;
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

    this.scope.tooltip = 'Generate Printable Maps';
  }

  public open(): void {
    this.log.debug('Open Print Preview Panel');
 //   var that = this;
    var options: ng.ui.bootstrap.IModalSettings = {
      templateUrl: 'app/components/print/print-preview.html',
      controller: PrintPreviewController
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

export class PrintPreviewController {

//  public item: any;
  private dialog: ng.ui.bootstrap.IModalServiceInstance;


  /* @ngInject */
  constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance) {
    this.dialog = $modalInstance;
//    this.item = item;
  }

  save() {
    this.dialog.close(); // passing this item back
//    this.dialog.close(this.item); // passing this item back
                                          // is not necessary since it
                                          // is the same instance of the
                                          // item sent to the modal
  }

  cancel() {
    this.dialog.dismiss('cancel');
  }
}
