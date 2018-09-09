import template from './project-type-gallery.html';
import controller from './project-type-gallery.controller';

export default {
  template,
  controller,
  require: {
    app: '^app'
  },
  bindings: {
    projects: '<'
  }
}