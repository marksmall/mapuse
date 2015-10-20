import { ITools } from './tools.resource';
import { IToolsResource } from './tools.resource';

export class ToolsController {

  private $log: ng.ILogService;
  private toolsResource: IToolsResource;

  /* @ngInject */
  constructor($log: ng.ILogService, toolsResource: IToolsResource) {
    this.$log = $log;
    this.$log.debug('Creating ToolsController');
    this.toolsResource = toolsResource;
  }

  public getTools(): void {
    this.toolsResource.query({}, (results: ITools[]) => this.onLoad(results));
  }

  private onLoad(toolsResults: ITools[]): void {
    this.$log.debug('Tools Results: ', toolsResults);
    toolsResults.forEach((result: ITools) => {
      this.$log.debug('Result: ', result);
    });
  }

/*  private getTool(tool: Itools): string {

  }
*/
}
