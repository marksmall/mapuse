'use strict';

import { ISearchResource } from './search.resource';

export class SearchFactory {

  private $resource: ng.resource.IResourceService;

  /* @ngInject */
  constructor($resource: ng.resource.IResourceService) {}

  public getSearchResource(): ISearchResource {
    return <ISearchResource> this.$resource('/api/search/:term', { term: '@term' }, {});
  }
}
