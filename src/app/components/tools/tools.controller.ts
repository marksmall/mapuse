'use strict';

import { ITools } from './tools.resource';
import { IToolsResource } from './tools.resource';

export class ToolsController {

  public $log: ng.ILogService;
  private toolsResource: IToolsResource;

  /* @ngInject */
  constructor($log: ng.ILogService, toolsResource: IToolsResource) {
    this.$log = $log;
    this.$log.debug('Creating ToolsController');
    this.toolsResource = toolsResource;
  }

  public getTools(el: any, attr: any): void {
    this.toolsResource.query({}, (results: ITools[]) => this.onLoad(results, el, attr));
  }

  private onLoad(toolsResults: ITools[], el: any, attr: any): void {
    var html = '';

    // Convert results into a 3 column grid.
    var grid = this.arrayToGrid(toolsResults, 3);
    this.$log.debug('Grid: ', grid);

    // Construct HTML grid layout with buttons for each tool.
    grid.forEach((row: any[]) => {
      html += '<div class="row">';
      row.forEach((tool: ITools) => {
        html += '<div class="col-xs-4 cell">';
        html += '<button type="button" class="btn btn-primary btn-lg btn-block text-center tool" title="' +
                tool.tooltip +
                  '"><i class="glyphicon glyphicon-' + tool.glyph + '"></i><br />' + tool.name + '</button>';
        html += '</div>';
      });
      html += '</div>';
    });

    // Add event to element to display the tools.
    el.popover({
      trigger: 'click',
      html: true,
      title: attr.popoverTitle,
      content: html,
      placement: attr.popoverPlacement
    });
  }

  /**
   * Convert a normal array into an array of arrays,
   * forming a grid.
   */
  private arrayToGrid(arr: ITools[], columns: number) {
    var newArr = [];
    for (var i = 0; i < arr.length; i+=columns) {
      newArr.push(arr.slice(i, i + columns));
    }
    return newArr;
  }
}
