import { Point } from './point';

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

    var overlay = new ol.Overlay({
      element: document.getElementById('overlay'),
      positioning: 'bottom-center'
    });

    // register an event handler for the click event
    this.map.on('click', function(event: any) {
      this.$log.debug('Map Click Event: ', event);
      // extract the spatial coordinate of the click event in map projection units
      var coord = event.coordinate;
      // transform it to decimal degrees
      var degrees = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
      // format a human readable version
      var hdms = ol.coordinate.toStringHDMS(degrees);
      // update the overlay element's content
      var element = <HTMLScriptElement>overlay.getElement();
      this.$log.debug('Overlay Element: ', element);
      element.innerHTML = hdms;
      // position the element (using the coordinate in the map's projection)
      overlay.setPosition(coord);
      // and add it to the map
      this.map.addOverlay(overlay);
    }, this);
    this.$log.debug('Map: ', this.map);
  }

  public setCenter(point: Point, zoomLevel: number): void {
    this.$log.debug('Centering on: ', point, zoomLevel);
    var position = ol.proj.transform([point.y, point.x], 'EPSG:4326', 'EPSG:3857');
    this.$log.debug('Position: ', position);

    this.map.getView().setCenter(position);
    this.map.getView().setZoom(zoomLevel);
  }
}
