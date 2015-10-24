/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
// import { MainController } from './main/main.controller';
// import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
// import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
// import { acmeNavbar } from '../app/components/navbar/navbar.directive';
// import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { MapService } from '../app/components/map/map.service';
import { MapController } from '../app/components/map/map.controller';
import { SearchResource } from '../app/components/search/search.resource';
import { digimapSearch } from '../app/components/search/search.directive';
import { digimapTools } from '../app/components/tools/tools.directive';
import { ToolsResource } from '../app/components/tools/tools.resource';

// declare var malarkey: any;
// declare var moment: moment.MomentStatic;

module roam {
  'use strict';

  angular.module('roam', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
//    .constant('malarkey', malarkey)
//    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
//    .service('githubContributor', GithubContributor)
//    .service('webDevTec', WebDevTecService)
    .service('mapService', MapService)
    .factory('searchResource', ['$resource', SearchResource.Search])
    .directive('digimapSearch', digimapSearch)
    .controller('MapController', MapController)
//    .controller('MainController', MainController)
    .factory('toolsResource', ['$resource', ToolsResource.Tools])
    .directive('digimapTools', digimapTools);
//    .directive('acmeNavbar', acmeNavbar)
//    .directive('acmeMalarkey', acmeMalarkey);
}
