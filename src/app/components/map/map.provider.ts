// interface describing the members that the provider's service offers
export interface IMapConfig {
    getConfig(): any;
}

// the following class represents the provider
export class MapConfig implements ng.IServiceProvider {

  private config = {};

  // configuration function
  public setConfig(config: any) {
    this.config = config;
  }

  // provider's factory function
  public $get() : IMapConfig {
    return {
      getConfig: () => { return this.config; }
    };
  }

}
