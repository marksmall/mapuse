import { IMapConfig } from './map.provider';
import { MapService } from './map.service';

export class MapController {

  private $log: ng.ILogService;
  private mapService: MapService;
  private mapConfig: IMapConfig;

  /* @ngInject */
  constructor($log: ng.ILogService, $state: any, mapService: MapService, mapConfig: IMapConfig) {
    this.$log = $log;
    this.$log.debug('Creating MapController');
    this.mapService = mapService;
    this.mapConfig = mapConfig.getConfig();
    this.$log.debug('Map Controller Config: ', this.mapConfig);
    this.$log.debug('App State: ', $state);

    // initialize map based on state.
    // get the client from the app state, set in index.route
    var client = $state.current.name;
    client = client.substring(client.lastIndexOf('.') + 1);
    // get client map config.
    var config = this.mapConfig[client];
    // fixme: what if config doesn't exist?
    this.$log.debug('Client Config: ', config);

    // map initialisation
    this.mapService.setMapConfig(config);
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
