class AppController {
  /* @ngInject*/
  constructor($window, $transitions) {
    this.$window = $window;
    this.$transitions = $transitions;
    this.isEmployer = false;
    this.isIntern = false;
    this.isLoggedIn = false;
  }

  $onInit() {
    this.$transitions.onBefore({}, (transition) => {
      const toStateName = transition.$to().name;
      this.isLoggedIn = this.$window.localStorage.getItem('userHash');
      this.isEmployer = this.$window.localStorage.getItem('userHash') === "employer";
      this.isIntern = this.$window.localStorage.getItem('userHash') === "intern";

      if (!this.isLoggedIn && toStateName !== "login" && toStateName !== "home") {
        return transition.router.stateService.target('home');
      }
      if (this.isLoggedIn){
        if (toStateName === "login" || toStateName === "home" ||
          (this.isIntern && (toStateName === 'project-type-gallery' || toStateName === 'create-project'))) {
          return transition.router.stateService.target('dashboard');
        }
      }
    });
  }
}

export default AppController