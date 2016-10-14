import { Injectable } from '@angular/core';

// import proj4 = require('proj4')
import * as proj4 from 'proj4'

// import  { Proj, defs } from 'proj4'
import { Map, tilegrid, proj, View, control, layer, source, Attribution, Extent } from 'openlayers'

import { MAP_CONFIG } from './map.config'
import { Layer } from './map'

proj4.defs('EPSG:27700','+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs')

@Injectable()
export class MapService {

  constructor() {
    // TODO
  }

  public createMap(name: string): Map {
    console.log(`Map Div: ${name}`)

    let extent: Extent = [0, 0, 700000, 1300000];

    // let extent = proj.transformExtent([-8.74, 49.81, 1.84, 60.9], 'EPSG:4326', 'EPSG:27700')
    // console.log(`EXTENT: ${JSON.stringify(extent)}`)
    let projection = proj.get('EPSG:27700')
    console.log(`PROJECTION: ${JSON.stringify(projection)}`)
    console.log(`PROJECTION: ${JSON.stringify(proj.get('EPSG:3857'))}`)
    // let projection = new proj.Projection({
    //   code: 'EPSG:27700',
    //   // The extent is used to determine zoom level 0. Recommended values for a
    //   // projection's validity extent can be found at http://epsg.io/.
    //   extent: extent,
    //   units: 'm'
    // });
    proj.addProjection(projection);

    projection.setExtent(extent)
    let proj27700 = proj.get('EPSG:27700')
    console.log(`PROJ27700: ${JSON.stringify(proj27700)}`)

    let layers = [
      new layer.Tile({
        extent: extent,
        source: new source.TileWMS({
          url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS/MapServer/WMSServer',
          attributions: [
            new Attribution({html: '©  <a href="http://bgs.ac.uk/data/services/soilwms.html">Contains British Geological Survey materials © NERC 2016</a>'})
          ],
          params: {
            'LAYERS': 'Parent.Material.European.Soil.Bureau.Description.1km',
            'FORMAT': 'image/png'
          }
        })
      })
    ]

    let map = new Map({
      controls: control.defaults().extend([
        new control.ZoomSlider(),
        new control.ScaleLine()
      ]),
      layers: layers,
      target: 'map',
      view: new View({
        projection: projection,
        center: proj.fromLonLat([55.945589, -3.182186], 'EPSG:27700'),
        // center: proj.fromLonLat([-2.24347, 54.88787], 'EPSG:27700'),
        extent: extent,
        zoom: 1
      })
    })






    // // Extent of the map in units of the projection (these match our base map)
    // let extent: Extent = [-3276800, -3276800, 3276800, 3276800];

    // // Fixed resolutions to display the map at (pixels per ground unit (meters when
    // // the projection is British National Grid))
    // let resolutions = [1600,800,400,200,100,50,25,10,5,2.5,1,0.5,0.25,0.125,0.0625];

    // // Define British National Grid Proj4js projection (copied from http://epsg.io/27700.js)
    // console.log(`PROJ4: ${proj4}`)
    // proj4.defs('EPSG:27700','+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs')
    // // defs('EPSG:27700','+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs')
    // // proj4.Proj('EPSG:27700')
    // // Define an OL3 projection based on the included Proj4js projection
    // // definition and set it's extent.
    // let bng = proj.get('EPSG:27700');
    // console.log(`BNG: ${JSON.stringify(bng)}`)
    // bng.setExtent(extent);
    // console.log(`BNG: ${JSON.stringify(bng)}`)

    // // Define a TileGrid to ensure that WMS requests are made for
    // // tiles at the correct resolutions and tile boundaries
    // let tileGrid = new tilegrid.TileGrid({
    //   origin: extent.slice(0, 2),
    //   resolutions: resolutions
    // })

    // let map = new Map({
    //   target: 'map',
    //   layers: [
    //     new layer.Tile({
    //         source: new source.TileWMS({
    //             url: 'http://t0.ads.astuntechnology.com/open/osopen/service?',
    //             attributions: [
    //                 new Attribution({html: 'Astun Data Service &copy; Ordnance Survey.'})
    //             ],
    //             params: {
    //                 'LAYERS': 'osopen',
    //                 'FORMAT': 'image/png',
    //                 'TILED': true
    //             },
    //             tileGrid: tileGrid
    //         })
    //     })
    // ],
    // view: new View({
    //     projection: bng,
    //     // projection: bng,
    //     resolutions: resolutions,
    //     center: [413674, 289141],
    //     zoom: 0
    //     })
    // })





    // // // define British National Grid Proj4js projection (copied from http://epsg.io/27700.js)
    // // // proj4.defs('EPSG:27700','+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs');
    // // // proj4.defs('EPSG:3857','+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs');
    // console.log(`Config CRS: ${MAP_CONFIG.crs.code}`)
    // console.log(`Config PROJ: ${MAP_CONFIG.crs.proj4}`)
    // // defs(MAP_CONFIG.crs.code, MAP_CONFIG.crs.proj4);
    // // proj4.defs(MAP_CONFIG.crs.code, MAP_CONFIG.crs.proj4);
    // defs(MAP_CONFIG.crs.code, MAP_CONFIG.crs.proj4);

    // // // define an OL3 projection based on the included Proj4js projection
    // // proj. .setProj4(Proj)
    // let projection = proj.get('EPSG:27700');
    // // proj.
    // // let projection = proj.get(MAP_CONFIG.crs.code);
    // let proj4 = new proj.Projection({code: MAP_CONFIG.crs.code})
    // console.log(`Projection: ${JSON.stringify(projection)}`)
    // console.log(`Proj4: ${JSON.stringify(proj4)}`)

    // let tileGrid = new tilegrid.TileGrid({
    //   origin: MAP_CONFIG.extent
    // })

    // // let options = {
    // //   target: name,
    // //   layers: this.getLayers(tileGrid),
    // //   view: new View({
    // //     projection: bng,
    // //     resolutions: MAP_CONFIG.resolutions,
    // //     center: MAP_CONFIG.center,
    // //     zoom: 0
    // //   }),
    // //   controls: control.defaults().extend([
    // //     new control.ZoomSlider(),
    // //     new control.ScaleLine()
    // //   ])
    // // }
    // // let map = new Map(options)
    //   let map = new ol.Map({
    //     target: 'map',
    //     layers: [
    //       new ol.layer.Tile({
    //         source: new ol.source.OSM()
    //       })
    //     ],
    //     view: new ol.View({
    //     //   center: proj.fromLonLat([37.41, 8.82]),
    //       zoom: 4
    //     })
    //   });





    // WORKING
    // let map = new Map({
    //   target: name,
    //   layers: [
    //     new layer.Tile({
    //       source: new source.OSM()
    //     })
    //   ],
    //   view: new View({
    //     projection: 'EPSG:3857',
    //     center: proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
    //     // center: proj.transform([-3.188267, 55.953251], 'EPSG:27700', 'EPSG:3857'),
    //     // center: [-3.188267, 55.953251],
    //     zoom: 6
    //   }),
    //   controls: control.defaults({
    //     attributionOptions: ({
    //       collapsible: false
    //     })
    //   }).extend([
    //     new control.ZoomSlider(),
    //     new control.ScaleLine(),
    //   ])
    // })

    return map
  }

  /**
   * Construct a list of layers from the map config.
   */
  private getLayers(tileGrid: tilegrid.TileGrid): any[] {
    let layers: any = [];

    MAP_CONFIG.layers.forEach((layer: Layer) => {
      let attributions = '<p>';
      console.log(`Layer Attribution: ${JSON.stringify(layer)}`)
      layer.attributions.forEach((attribution: string) => {
        attributions += attribution + '<br/>';
      });
      attributions += '</p>';

      layers.push(new ol.layer.Tile({
        source: this.getSource(layer, attributions, tileGrid),
        opacity: layer.opacity
      }));
    })

    return layers
  }

  /**
   * 
   * 
   * @private
   * @param {*} element
   * @param {string} attributions
   * @param {ol.tilegrid.TileGrid} tileGrid
   * 
   * @returns {ol.source.TileWMS}
   */
  private getSource(element: any, attributions: string, tileGrid: tilegrid.TileGrid): ol.source.TileWMS {
    if (element.type.toUpperCase() === 'WMS') {
      return this.getWmsSource(element, attributions, tileGrid)
    } else {
      throw new TypeError(`Unknown Source Type: ${element.type.toUpperCase()}`)
    }
  }

  /**
   * 
   * 
   * @private
   * @param {*} element
   * @param {string} attributions
   * @param {ol.tilegrid.TileGrid} tileGrid
   * 
   * @returns {ol.source.TileWMS}
   */
  private getWmsSource(element: any, attributions: string, tileGrid: tilegrid.TileGrid): ol.source.TileWMS {
    let source = new ol.source.TileWMS({
      url: element.url,
      attributions: [
        new ol.Attribution({html: attributions})
      ],
      params: {
        'LAYERS': element.sublayers,
        'FORMAT': element.format,
        'TILED': true
      },
      tileGrid: tileGrid
    });

    return source
  }

}
