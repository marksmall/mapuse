import { PrintController } from './print.controller';

export interface IPrintScope extends ng.IScope {
  name: string;
  tooltip: string;
  items: string[];
}

export function mapusePrint(): ng.IDirective {

  return {
    restrict: 'E',
    templateUrl: '/app/components/print/print.html',
    controller: PrintController,
    controllerAs: 'vm'
  };
}
