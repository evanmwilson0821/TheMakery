class AppRoutes {

  constructor($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          template: '<home></home>'
        })
        .state('login', {
          url: '/login/{role:student|employer}',
          template: '<login></login>'
        });

      $locationProvider.html5Mode(true);
  }
}

export default AppRoutes