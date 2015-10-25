import { PrintPreviewController } from './print-preview.controller';

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
