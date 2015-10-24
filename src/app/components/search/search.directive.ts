import { SearchController } from './search.controller';


export function digimapSearch(): ng.IDirective {

  return {
    restrict: 'E',
    templateUrl: '/app/components/search/search.html',
    controller: SearchController,
    controllerAs: 'vm'
  };
}
