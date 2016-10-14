import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HTTP_PROVIDERS} from '@angular/http'

import {routing, appRoutingProviders} from './app.routing'
import {App} from './app'
import {Home} from '../pages/home/home'

import { MapComponent } from '../modules/map/map.component'
import { MapService } from '../modules/map/map.service'

@NgModule({
    declarations: [App, Home, MapComponent],
    imports: [BrowserModule, routing],
    providers: [appRoutingProviders, MapService],
    bootstrap:    [App]
})
export class AppModule {}
