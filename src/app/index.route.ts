/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $stateProvider
      .state('app', {
        url: '/',
        views: {
          'search': {
            templateUrl: '/app/components/search/search.html',
            controller: 'SearchController',
            controllerAs: 'search'
          },
          'map': {
            templateUrl: '/app/components/map/map.html',
            controller: 'MapController',
            controllerAs: 'map'
          }
        }
      });

  $urlRouterProvider.otherwise('/');
}
