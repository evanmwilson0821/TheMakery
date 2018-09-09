import template from './menu\'.html';
import controller from './menu.controller';

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