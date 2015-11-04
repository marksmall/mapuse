import { Point } from './point';

export class MapService {

  public map: any;
  private $log: ng.ILogService;
  private defaults: any;
  private mapConfig: any;

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

  public init(data: any): void {
    // check openlayers is available on service instantiation
    if (!ol) { return; }

    this.$log.debug('Initializing map with config: ', data);

    var config = angular.extend(this.defaults, data);

    this.map = this.getMap();

//    this.featureInfoService.addFeatureInfoEvent(this.map);
    this.addFeatureInfoEvent();
    this.$log.debug('Map: ', this.map);
  }

  public setCenter(point: Point, zoomLevel: number): void {
    this.$log.debug('Centering on: ', point, zoomLevel);
    var position = ol.proj.transform([point.y, point.x], 'EPSG:4326', 'EPSG:3857');
    this.$log.debug('Position: ', position);

    this.map.getView().setCenter(position);
    this.map.getView().setZoom(zoomLevel);
  }

  public setMapConfig(config: any): void {
    this.mapConfig = config;
  }

  private addFeatureInfoEvent(): void {
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
  }

  private getMap(): any {
    // extent of the map in units of the projection (these match our base map)
    // var extent = [-3276800, -3276800, 3276800, 3276800];

    // fixed resolutions to display the map at (pixels per ground unit (meters when
    // the projection is British National Grid))
    // var resolutions = [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625];

    // define British National Grid Proj4js projection (copied from http://epsg.io/27700.js)
    // proj4.defs('EPSG:27700','+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs');
    // proj4.defs('EPSG:3857','+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs');
    proj4.defs(this.mapConfig.crs.code, this.mapConfig.crs.proj4);

    // define an OL3 projection based on the included Proj4js projection
    var bng = ol.proj.get(this.mapConfig.crs.code);

    // define a TileGrid to ensure that WMS requests are made for
    // tiles at the correct resolutions and tile boundaries
    var tileGrid = new ol.tilegrid.TileGrid({
      origin: this.mapConfig.extent.slice(0, 2),
      resolutions: this.mapConfig.resolutions
    });

    var map = new ol.Map({
       target: 'map',
       layers: this.getLayers(tileGrid),
       view: new ol.View({
        projection: bng,
        resolutions: this.mapConfig.resolutions,
        center: this.mapConfig.center,
        zoom: 0
       }),
      controls: ol.control.defaults().extend([
        new ol.control.ZoomSlider(),
        new ol.control.ScaleLine()
      ])
     });

    return map;
  }

  private getLayers(tileGrid: ol.tilegrid.TileGrid): any[] {
    var layers = [
      new ol.layer.Tile({ // order matters, so layer at index zero is the base layer.
        source: new ol.source.TileWMS({
          url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
          attributions: [
            new ol.Attribution({html: 'Astun Data Service &copy; Ordnance Survey.'})
          ],
          params: {
            'LAYERS': 'osopen',
            'FORMAT': 'image/png',
            'TILED': true
          },
          tileGrid: tileGrid
        })
      }),
      new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: 'http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?',
          attributions: [
            new ol.Attribution({html: 'Write some text.'})
          ],
          params: {
            'LAYERS': ['GBR_BGS_625k_BA'],
            'FORMAT': 'image/png',
            'TILED': true
          },
          tileGrid: tileGrid,
          opacity: 0.5
        })
      })
    ];

    return layers;
  }

}
