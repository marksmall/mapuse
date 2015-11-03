/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $stateProvider
      .state('app', {
        abstract: true,
        views: {
          'map': {
            templateUrl: '/app/components/map/map.html',
            controller: 'MapController',
            controllerAs: 'map'
          }
        }
      })
      .state('app.os', {
        url: '/os'
      })
      .state('app.geology', {
        url: '/geology'
      });

  $urlRouterProvider.otherwise('/');
}
