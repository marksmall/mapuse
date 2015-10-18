export class MapService {

  private $log: ng.ILogService;
  private map: any;
  private defaults: any;

  /** @ngInject */
  constructor($log: ng.ILogService) {
    this.$log = $log;
    this.$log.debug('Creating MapService');
	  this.map = {};

    this.defaults = {
      zoom: 2,
      startLocation: [ 0, 40 ],
      extractStylesKml: false,
      popupOffset: [ 0, 0 ],
      featurePropertiesMap: ['name', 'description', 'address', 'phoneNumber', 'styleUrl'],
      onFeatureSelected: function(feature: any) {
        this.$log.debug('feature selected', feature);
      }
    };
  }

  init(data: any): void {
    // check openlayers is available on service instantiation
    // this can be handled with Require later on
    if (!ol) { return; }

    this.$log.debug('Initializing map with config: ', data);

    var config = angular.extend(this.defaults, data);

    // map initialisation
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.MapQuest({layer: 'osm'})
        })
      ],
      view: new ol.View({
        center: ol.proj.transform(config.startLocation, 'EPSG:4326', 'EPSG:3857'),
        zoom: config.zoom
      }),
		  controls: ol.control.defaults().extend([
				new ol.control.ZoomSlider(),
				new ol.control.ScaleLine()
			])
    });
    this.$log.debug('Map: ', this.map);
  }
}
