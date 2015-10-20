import { ToolsController } from './tools.controller';

interface IToolsScope extends ng.IScope {
  name: string;
}


/* @ngInject */
export function digimapTools(): ng.IDirective {

  return {
    restrict: 'E',
    templateUrl: '/app/components/tools/tools.html',
    link: linkFunc,
    controller: ToolsController,
    controllerAs: 'vm'
  };
}

function linkFunc(scope: IToolsScope, el: any, attr: any, vm: ToolsController) {
  var tools = vm.getTools();

  var html = '<strong>Replace Me</strong>';
  el.popover({
    trigger: 'click',
    html: true,
    content: html,
    placement: attr.popoverPlacement
  });

};
