/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { MapConfig } from '../app/components/map/map.provider';
import { mapConfig } from '../app/components/map/map.config';
import { MapService } from '../app/components/map/map.service';
import { MapController } from '../app/components/map/map.controller';
import { SearchResource } from '../app/components/search/search.resource';
import { digimapSearch } from '../app/components/search/search.directive';
import { digimapTools } from '../app/components/tools/tools.directive';
import { ToolsResource } from '../app/components/tools/tools.resource';
import { PrintResource } from '../app/components/print/print.resource';
import { mapusePrint } from '../app/components/print/print.directive';
import { mapuseSaveMapAs } from '../app/components/save-map-as/save-map-as.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module roam {
  'use strict';

  angular.module('roam', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .provider('mapConfig', MapConfig)
    .config(mapConfig)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .service('mapService', MapService)
    .factory('searchResource', ['$resource', SearchResource.Search])
    .directive('digimapSearch', digimapSearch)
    .controller('MapController', MapController)
    .controller('MainController', MainController)
    .factory('toolsResource', ['$resource', ToolsResource.Tools])
    .directive('digimapTools', digimapTools)
    .factory('printResource', ['$resource', PrintResource.Print])
    .directive('mapusePrint', mapusePrint)
    .directive('mapuseSaveMapAs', mapuseSaveMapAs)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey);
}
