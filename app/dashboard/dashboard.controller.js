class DashboardController {
  /* @ngInject*/
  constructor($http, API_URL) {
    this.$http = $http;
    this.API_URL = API_URL;
  }

  $onInit() {
    this.projects = this.projects.data;
  }

  parseProjectData() {

  }
}

export default DashboardController