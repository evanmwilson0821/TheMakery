class MenuController {
  /* @ngInject*/
  constructor($state, $window) {
    this.$state = $state;
    this.$window = $window;
  }

  goTo(stateName) {
    this.$state.go(stateName);
  }

  signOut() {
    this.$window.localStorage.removeItem('userHash');
    this.$state.go('home');
  }

  dropdownChange() {
    switch (this.dropdownSelection) {
      case "dashboard":
        this.goTo('dashboard');
        break;
      case "portfolio":
        this.goTo('dashboard.portfolio');
        break;
      case "signout":
        this.signOut();
        break;
    }
  }
}

export default MenuController