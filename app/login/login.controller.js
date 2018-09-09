class LoginController {
  /* @ngInject*/
  constructor($window, $state) {
    this.$window = $window;
    this.username = '';
    this.password = '';
    this.$state = $state;
  }

  login() {
    if (this.username === "") {

    }
  }
}

export default LoginController