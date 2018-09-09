class DashboardController {
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

export default DashboardController