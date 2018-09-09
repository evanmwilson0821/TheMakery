import component from './dashboard.component';
import projectTypeGalleryModule from './project-type-gallery/project-type-gallery.module';

import './dashborad.scss';

export default angular.module('dashboard', [projectTypeGalleryModule])
  .component('dashboard', component)
  .name;