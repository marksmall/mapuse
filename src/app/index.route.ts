/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $stateProvider
      .state('app', {
        url: '/',
        views: {
          'map': {
            templateUrl: '/app/components/map/map.html',
            controller: 'MapController',
            controllerAs: 'map'
          }
        }
      });

  $urlRouterProvider.otherwise('/');
}
