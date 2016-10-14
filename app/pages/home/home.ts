// import Angular 2
import {Component} from '@angular/core'

import { MapComponent } from '../../modules/map/map.component'

@Component({
  selector: 'page-home',
  templateUrl: 'pages/home/home.template.html',
  directives: [MapComponent]
})
export class Home {

  constructor() {
    console.log('Home component loaded')
  }

}
