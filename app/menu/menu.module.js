import component from './menu.component';
import projectTypeGalleryModule from './project-type-gallery/project-type-gallery.module';

export default angular.module('dashboard', [projectTypeGalleryModule])
  .component('dashboard', component)
  .name;