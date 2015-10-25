import { SearchController } from './search.controller';


export function digimapSearch(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      extraValues: '='
    },
    templateUrl: 'app/components/search/search.html',
    controller: SearchController,
    controllerAs: 'searchCtrl'
  };
}
