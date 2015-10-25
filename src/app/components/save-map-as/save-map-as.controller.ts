// import { MapService } from '../map/map.service';

export interface ISaveMapAsScope extends ng.IScope {
  saveMapAs: any;
}

export class SaveMapAsController {

  private log: ng.ILogService;
  private scope: ISaveMapAsScope;
//  private attributes: ng.IAttributes[];
//  private element: any;
//  private modal: ng.ui.bootstrap.IModalService;
//  private mapService: MapService;

  /* @ngInject */
  constructor($scope: ISaveMapAsScope, $log: ng.ILogService, $attrs: ng.IAttributes[], $element: ng.IAugmentedJQuery) {
    this.log = $log;
    this.log.debug('Creating SaveMapAsController');
//    this.attributes = $attrs;
//    this.element = $element;
//    this.modal = $modal;
    this.scope = $scope;

    this.scope.saveMapAs = {};
    this.scope.saveMapAs.tooltip = 'Download Map as PNG';
/*    this.mapService = mapService;
*/  }

  public save(): void {
    this.log.debug('Saving Map');
/*	  this.mapService.map.once('postcompose', (event: any) => {
      var canvas = event.context.canvas;
      canvas.toDataURL('image/png');
//      exportPNGElement.href = canvas.toDataURL('image/png');
    });
    this.mapService.map.renderSync();
*/  }
}
