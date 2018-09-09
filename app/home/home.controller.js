class HomeController {
  /* @ngInject*/
  constructor($state) {
    this.$state = $state;
  }

  loginAs(role) {
    this.$state.go('login', {
      role: role
    });
  }
}

export default HomeController