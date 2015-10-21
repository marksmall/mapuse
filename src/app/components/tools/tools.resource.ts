'use strict';

export interface ITools extends ng.resource.IResource<ITools> {
  name: string;
  glyph: string;
  tooltip: string;
}

export interface IToolsResource  extends ng.resource.IResourceClass<ITools> {}

export class ToolsResource {
  /* @ngInject */
  public static Tools($resource: ng.resource.IResourceService): IToolsResource {
    var url = '/api/tools';
    var resource = $resource(url, {});

    return <IToolsResource> resource;
  }
}
