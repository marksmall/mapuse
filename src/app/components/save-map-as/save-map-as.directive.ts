import { SaveMapAsController } from './save-map-as.controller';

export function mapuseSaveMapAs(): ng.IDirective {

  return {
    restrict: 'E',
    templateUrl: 'app/components/save-map-as/save-map-as.html',
    controller: SaveMapAsController,
    controllerAs: 'saveAsCtrl'
  };
}
