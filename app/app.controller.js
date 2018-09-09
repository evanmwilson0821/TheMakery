class AppController {
  /* @ngInject*/
  constructor($window, $transitions) {
    this.$window = $window;
    this.$transitions = $transitions;
    this.isEmployer = false;
    this.isStudent = false;
  }

  $onInit() {
    this.$transitions.onBefore({}, (transition) => {
      const toStateName = transition.$to().name;
      const isLoggedIn = !this.$window.localStorage.getItem('userHash');
      this.isEmployer = this.$window.localStorage.getItem('userHash') === "employer";
      this.isStudent = this.$window.localStorage.getItem('userHash') === "student";

      if (!isLoggedIn && toStateName !== "login" && toStateName !== "home") {
        return transition.router.stateService.target('home');
      }
      if (isLoggedIn){
        if (toStateName === "login" || toStateName === "home") {
          return transition.router.stateService.target('dashboard');
        }
      }
    });
  }
}

export default AppController