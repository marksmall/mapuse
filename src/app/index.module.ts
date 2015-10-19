/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { MapService } from '../app/components/map/map.service';
import { MapController } from '../app/components/map/map.controller';
import { SearchController } from '../app/components/search/search.controller';
import { SearchResource } from '../app/components/search/search.resource';
// import { SearchFactory } from '../app/components/search/search.factory';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module roam {
  'use strict';

  angular.module('roam', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .service('mapService', MapService)
    // .factory('Search', SearchResource.Search)
    .factory('Search', ['$resource', SearchResource.Search])
    .controller('SearchController', SearchController)
//    .factory('SearchFactory', SearchFactory)
    .controller('MapController', MapController)
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey);
}
