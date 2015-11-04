import { MapConfig } from './map.provider';

/** @ngInject */
export function mapConfig(mapConfigProvider: MapConfig) {
  var config = {
    os: {
      extent: [-3276800, -3276800, 3276800, 3276800],
      resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
      center: [413674, 289141],
      crs: {
        code: 'EPSG:27700',
        proj4: '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs'
      },
      layers: [{
        type: 'WMS',
        url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
        attributions: ['Astun Data Service &copy; Ordnance Survey.'],
        sublayers: ['osopen'],
        format: 'image/png',
        opacity: 1
      }]
    },
    geology: {
      extent: [-3276800, -3276800, 3276800, 3276800],
      resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
      center: [413674, 289141],
      crs: {
        code: 'EPSG:27700',
        proj4: '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs'
      },
      layers: [{
        type: 'WMS',
        url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
        attributions: ['Astun Data Service &copy; Ordnance Survey.'],
        sublayers: ['osopen'],
        format: 'image/png',
        opacity: 1
      }, {
        type: 'WMS',
        url: 'http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?',
        attributions: ['Write some text.'],
        sublayers: ['GBR_BGS_625k_BA'],
        format: 'image/png',
        opacity: 0.5
      }]
    },
    historic: {
      extent: [-3276800, -3276800, 3276800, 3276800],
      resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
      center: [413674, 289141],
      crs: {
        code: 'EPSG:3857',
        proj4: '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs'
      },
      layers: [{
        type: 'WMS',
        url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
        attributions: ['Astun Data Service &copy; Ordnance Survey.'],
        sublayers: ['osopen'],
        format: 'image/png',
        opacity: 1
      }, {
        type: 'WMS',
        url: 'http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms?',
        attributions: ['Historical Maps Layer, 1919-1947 from the <a href="http://maps.nls.uk/projects/api/">NLS&nbsp;Maps&nbsp;API</a>'],
        sublayers: ['GBR_BGS_625k_BA'],
        format: 'image/png',
        opacity: 0.5
      }]
    }
  };

  mapConfigProvider.setConfig(config);
}
