export class AppRoutes {

  constructor($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          template: 'hello'

        })

      $locationProvider.html5Mode(true);
  }
}
