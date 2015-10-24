import { Point } from './point';
import { MapService } from './map.service';

describe('service MapService', () => {
  beforeEach(angular.mock.module('roam'));

  it('should be registered', inject((mapService: MapService) => {
    expect(mapService).not.toBeNull();
  }));

  describe('init function', () => {
    it('should initialize a map', inject((mapService: MapService) => {
      // initialize the map.
      mapService.init({
        extractStylesKml: false,
        popupOffset: [ -4, -43 ],
        featurePropertiesMap: [ 'name', 'description' ], // override default mapping
        onFeatureSelected: this.onFeatureSelected // override default event handler
      });

      console.log('Map: ', mapService.map.getTarget());
      expect(mapService.map.getTarget() === 'map').toBeTruthy();
    }));
  });

  describe('setCenter function', () => {
    beforeEach(inject((mapService: MapService) => {
      // initialize the map.
      mapService.init({
        extractStylesKml: false,
        popupOffset: [ -4, -43 ],
        featurePropertiesMap: [ 'name', 'description' ], // override default mapping
        onFeatureSelected: this.onFeatureSelected // override default event handler
      });
    }));

    it('should center map on the supplied point and zoom level', inject((mapService: MapService) => {
      var point = new Point(55.953252, -3.188267);
      var zoomLevel = 18;
      mapService.setCenter(point, zoomLevel);
      var mockCoordinate = ol.proj.transform([point.y, point.x], 'EPSG:4326', 'EPSG:3857');
      var view = mapService.map.getView();
      expect(view.getCenter()).toEqual(mockCoordinate);
      expect(view.getZoom()).toEqual(zoomLevel);
    }));
  });
});
