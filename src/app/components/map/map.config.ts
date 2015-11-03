import { MapConfig } from './map.provider';

/** @ngInject */
export function mapConfig(mapConfigProvider: MapConfig) {
  var config = {
    os: {
      extent: [-3276800, -3276800, 3276800, 3276800],
      resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
      crs: {
        code: 'ESPG:27700',
        proj4: '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs'
      }
    },
    geology: {
      extent: [-3276800, -3276800, 3276800, 3276800],
      resolutions: [1600, 800, 400, 200, 100, 50, 25, 10, 5, 2.5, 1, 0.5, 0.25, 0.125, 0.0625],
      crs: {
        code: 'ESPG:27700',
        proj4: '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs'
      }
    }
  };

  mapConfigProvider.setConfig(config);
}
