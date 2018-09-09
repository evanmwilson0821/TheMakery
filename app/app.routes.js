class AppRoutes {
  constructor($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "": 'home'
        }
      })
      .state('login', {
        url: '/login/{role:intern|employer}',
        views: {
          "": 'login'
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        views: {
          "": 'dashboard'
        },
        resolve: {
          projects
        }
      });

    $locationProvider.html5Mode(true);
  }
}

function projects($http, API_URL) {
  return $http.get(API_URL + 'projects.php');
}

export default AppRoutes