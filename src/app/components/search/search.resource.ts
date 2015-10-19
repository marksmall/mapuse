'use strict';

import { Point } from './point';

export interface ISearch extends ng.resource.IResource<ISearch> {
  searchTerm: string;
  zoomLevel: number;
  point: Point;
}

export interface ISearchResource  extends ng.resource.IResourceClass<ISearch> {}

export class SearchResource {
  /* @ngInject */
  public static Search($resource: ng.resource.IResourceService): ISearchResource {
    var url = '/api/search';
    var resource = $resource(url, {});

    return <ISearchResource> resource;
  }
}
