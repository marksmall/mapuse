import { ToolsController } from './tools.controller';

interface IToolsScope extends ng.IScope {
  name: string;
}

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
  vm.getTools(el, attr);
};
