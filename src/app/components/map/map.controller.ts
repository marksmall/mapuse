import { MapService } from './map.service';

export class MapController {

  private $log: ng.ILogService;
  private mapService: MapService;

  /* @ngInject */
  constructor($log: ng.ILogService, mapService: MapService) {
    this.$log = $log;
    this.$log.debug('Creating MapController');
    this.mapService = mapService;

    // map initialisation
    this.mapService.init({
      extractStylesKml: false,
      popupOffset: [ -4, -43 ],
      featurePropertiesMap: [ 'name', 'description' ], // override default mapping
      onFeatureSelected: this.onFeatureSelected // override default event handler
    });
  }

  public onFeatureSelected(feature: any) {
    this.$log.debug('feature selected: ', feature);
  }
  
}
