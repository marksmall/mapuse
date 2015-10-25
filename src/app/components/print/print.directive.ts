import { PrintController } from './print.controller';

export function mapusePrint(): ng.IDirective {

  return {
    restrict: 'E',
    templateUrl: 'app/components/print/print.html',
    controller: PrintController,
    controllerAs: 'printCtrl'
  };
}
