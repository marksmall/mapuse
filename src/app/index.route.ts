/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'app/components/map/map.html',
      controller: 'MapController',
      controllerAs: 'map'
    });

  $urlRouterProvider.otherwise('/');
}
