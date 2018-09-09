import projectTypeData from "./project-type.data.json";

class ProjectTypeGalleryController {
  /* @ngInject*/
  constructor($state) {
    this.$state = $state;
    this.projectTypes = projectTypeData;
  }

  pickProject(projectType) {
    this.$state.go('create-project', { projectType });
  }
}

export default ProjectTypeGalleryController