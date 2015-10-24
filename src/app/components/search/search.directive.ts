import { ISearch } from './search.resource';
import { SearchController } from './search.controller';

export interface ISearchScope extends ng.IScope {
  searchResults: ISearch[];
  searchTerm: string;
  vm: SearchController;
}


export function digimapSearch(): ng.IDirective {

  return {
    restrict: 'E',
    templateUrl: '/app/components/search/search.html',
    controller: SearchController,
    controllerAs: 'vm'
  };
}
