import { Component, Input, AfterViewInit } from '@angular/core'

import { Map } from 'openlayers'

import { MapService } from './map.service'

@Component({
  selector: 'map',
  templateUrl: 'modules/map/map.template.html'
})
export class MapComponent implements AfterViewInit {

  @Input() mapname: string
  private map: Map

  constructor(private mapService: MapService) {
    console.log('Creating Map Component')
  }

  ngAfterViewInit() {
    // Map needs to be created after the view has been initialized or the template
    // will not be properly defined i.e. map name will not have been set.
    this.map = this.mapService.createMap('map')
  }
}
