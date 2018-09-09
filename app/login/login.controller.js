class LoginController {
  /* @ngInject*/
  constructor($window, $state) {
    this.$window = $window;
    this.username = '';
    this.password = '';
    this.$state = $state;
    this.errorOccured = false;
  }

  login() {
    if (this.$state.params.role === "intern" && this.username === "intern" && this.password === "hackathon") {
      this.$window.localStorage.setItem('userHash', 'intern');
      this.$state.go('dashboard');
    } else if (this.$state.params.role === "employer" && this.username === "employer" && this.password === "hackathon") {
      this.$window.localStorage.setItem('userHash', 'employer');
      this.$state.go('dashboard');
    } else {
      this.errorOccured = true;
    }
  }
}

export default LoginController