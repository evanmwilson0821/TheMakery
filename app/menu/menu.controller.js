import projectTypeData from "./project-type-gallery/project-type.data.json";

class MenuController {
  /* @ngInject*/
  constructor($state, $window) {
    this.$state = $state;
    this.$window = $window;
    this.projectTypes = projectTypeData;
  }

  $onInit() {
    this.projects = this.projects.data;
    this.parseProjectData();
  }

  parseProjectData() {
    for (let i = 0; i < this.projects.length; i++) {
      angular.merge(this.projects[i], projectTypeData[this.projects[i].type]);
      this.projects[i].numberOfCompletedTasks = this.getNumberOfCompletedTasks(this.projects[i].tasks);
      this.projects[i].progressInTasks = 100*this.projects[i].numberOfCompletedTasks/this.projects[i].tasks.length;
    }
  }

  getNumberOfCompletedTasks(tasks) {
    let numberOfCompletedTasks = 0;

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].completed) {
        numberOfCompletedTasks++;
      }
    }

    return numberOfCompletedTasks;
  }

  goToProjectTypeGallery() {
    this.$state.go('dashboard.project-type-gallery');
  }
}

export default MenuController