'use strict';

export interface IPrint extends ng.resource.IResource<IPrint> {
  printOptions: any;
}

export interface IPrintResource  extends ng.resource.IResourceClass<IPrint> {}

export class PrintResource {

  /* @ngInject */
  public static Print($resource: ng.resource.IResourceService): IPrintResource {
    var url = '/api/print';
    var resource = $resource(url, {});

    return <IPrintResource> resource;
  }
}
