'use strict';

import { Point } from '../map/point';

export interface ISearch extends ng.resource.IResource<ISearch> {
  name: string;
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
