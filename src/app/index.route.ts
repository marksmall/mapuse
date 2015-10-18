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
          },
          'tools': {
            templateUrl: '/app/components/tools/tools.html'/*,
            controller: 'MapController',
            controllerAs: 'map'*/
          }
        }
      })
      .state('app.os', {
        url: '/os'
      });
/*    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('os', {
      url: '/os',
      templateUrl: 'app/components/map/map.html',
      controller: 'MapController',
      controllerAs: 'map'
    })
    .state('geology', {
      url: '/geology',
      templateUrl: 'app/components/map/map.html',
      controller: 'MapController',
      controllerAs: 'map'
    });
*/
  $urlRouterProvider.otherwise('/');
}
