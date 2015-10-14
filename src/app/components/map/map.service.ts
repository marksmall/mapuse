export class MapService {

  private $log: ng.ILogService;
  private map: any;
  private defaults: any;

  /** @ngInject */
  constructor($log: ng.ILogService) {
    this.$log = $log;
	  this.map = {};

    this.defaults = {
      zoom: 15,
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
 /*   if (!ol) return {};
 */
    this.$log.debug('Initializing map with config: ', data);

    var config = angular.extend(this.defaults, data);

    /*createMyZoomToExtentControl();*/

    // map initialisation
    this.$log.debug('OL: ', ol);
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
		    /*new myZoomToExtentControl({tipLabel: 'Fit to extent'}),*/
				new ol.control.ScaleLine()
			])
    });

    /*popupSetup();
    loadKML();
    zoomToExtent();*/
 /*   defaults = {
      zoom: 15,
      startLocation: [0,40],
      extractStylesKml: false,
      popupOffset: [0,0],
      featurePropertiesMap: ['name', 'description', 'address', 'phoneNumber', 'styleUrl'],
      onFeatureSelected: function(feature) { console.log("feature selected", feature);}
    },
    zIndex = 9999,
    popup,
    selectedFeature,
    myZoomToExtentControl;
*/  }

/*  getContribinitutors(limit: number = 30): ng.IPromise<any[]> {
    return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
      .then((response: any): any => {
        return response.data;
      })
      .catch((error: any): any => {
        this.$log.error('XHR Failed for getContributors.\n', error.data);
      });
  }
*/}
